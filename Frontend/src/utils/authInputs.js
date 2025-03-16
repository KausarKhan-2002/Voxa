const authInputsStyle = "w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"

export const authInputs = [
  {
    type: "text",
    name: "name",
    placeholder: "Enter your name",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Enter your password",
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Enter your confirm password",
  },
  {
    type: "tel",
    name: "phoneNumber",
    placeholder: "Enter your phone number",
  },
];

// Add style dynamically
for (let obj of authInputs) {
    obj["style"] = authInputsStyle
}
