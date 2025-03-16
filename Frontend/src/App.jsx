import React from "react";
import PanelContainer from "./Components/PanelContainer/PanelContainer";
import store from "./Store/store";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./Components/PanelContainer/RightPanel/ChatHeader/UserProfile";
import AuthForm from "./Components/AuthForm/AuthForm";
import AuthPanel from "./Components/AuthForm/AuthPanel";
import EditProfile from "./Components/ProfilePanel/EditProfile";

// npm install cropperjs@1.5.13 react-cropper@2.3.3

const App = () => {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen bg-gray-800 text-white p-5">
        
        <Routes>
        <Route path="/auth" element={<AuthPanel />} />
          <Route path="/chats" element={<PanelContainer />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
