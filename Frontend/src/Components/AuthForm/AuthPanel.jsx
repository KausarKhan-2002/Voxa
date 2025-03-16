import React from "react";
import AuthForm from "./AuthForm";
import AuthLeft from "./AuthLeft";

const AuthPanel = () => {
  return (
    <div className="flex justify-center items-center h-[94vh] bg-slate-900">
      <AuthLeft />
      <AuthForm />
    </div>
  );
};

export default AuthPanel;
