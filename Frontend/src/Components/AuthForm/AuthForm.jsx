import React, { useState } from "react";
import { authInputs } from "../../utils/authInputs";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {setUser} from "../../Store/userSlice"

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    try {
      const API = isRegistering
        ? "http://localhost:7000/user/signup"
        : "http://localhost:7000/user/login";

      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput),
        credentials: isRegistering ? "omit" : "include",
      });
      

      const json = await res.json();

      // Reset form after submission
      setUserInput({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
      });

      setIsRegistering(false);
      !isRegistering && navigate("/editprofile");

      if (!json.success) {
        throw new Error(json.message)
      }

      alert(json.message)
      !isRegistering && dispatch(setUser(json.user))

    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleFormSubmit = () => {
    console.log(userInput);

    fetchData();
  };

  const fieldSets = {
    register: ["name", "email", "password", "confirmPassword", "phoneNumber"],
    login: ["email", "password"],
  };

  const filterAuthInputs = authInputs.filter((auth) =>
    fieldSets[isRegistering ? "register" : "login"].includes(auth.name)
  );

  return (
    <section
      style={{ boxShadow: "0 30px 10px 2px #020617" }}
      className="flex justify-center items-center gap-10 bg-slate-800 w-[40%] rounded-full  border-b-4 border-slate-600"
    >
      <div className="bg-slate-800 bg-opacity-90 p-8 rounded-2xl w-full max-w-md border-b-2 border-slate-600">
        <h2 className="text-2xl font-semibold text-gray-200 text-center mb-6">
          {isRegistering ? "Create an Account" : "Welcome Back"}
        </h2>

        <form className="space-y-5">
          {filterAuthInputs.map((auth, ind) => (
            <div key={ind}>
              <input
                type={auth.type}
                name={auth.name}
                value={userInput[auth.name] || ""}
                onChange={handleInputChange}
                className={auth.style}
                placeholder={auth.placeholder}
                autoComplete="off"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={handleFormSubmit}
            className="w-full p-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
          >
            {isRegistering ? "Sign Up" : "Login"}
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
            {isRegistering ? "Already have an account?" : "New here?"}{" "}
            <span
              className="text-blue-400 cursor-pointer hover:underline"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? "Log in" : "Sign up"}
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
