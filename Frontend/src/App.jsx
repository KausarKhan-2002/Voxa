import React, { useEffect } from "react";
import PanelContainer from "./Components/PanelContainer/PanelContainer";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserProfile from "./Components/PanelContainer/RightPanel/ChatHeader/UserProfile";
import AuthForm from "./Components/AuthForm/AuthForm";
import AuthPanel from "./Components/AuthForm/AuthPanel";
import EditProfile from "./Components/ProfilePanel/EditProfile";
import { setUser } from "./Store/userSlice";
import { ToastContainer } from "react-toastify";
import { notification } from "./utils/notification";

// npm install cropperjs@1.5.13 react-cropper@2.3.3

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserAuthorization = async () => {
      try {
        const res = await fetch("http://localhost:7000/user/authorized", {
          method: "GET",
          credentials: "include",
        });
        const json = await res.json();

        if (!json.success) {
          notification("warn", json.message);
          navigate("/auth");
          return;
        }

        dispatch(setUser(json.user));
      } catch (err) {
        console.log("Error:", err.message);
        notification("error", "Internal server error");
      }
    };
    fetchUserAuthorization();
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-800 text-white p-5">
      {/* Set theme globally */}
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/auth" element={<AuthPanel />} />
        <Route path="/chats" element={<PanelContainer />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </div>
  );
};

export default App;
