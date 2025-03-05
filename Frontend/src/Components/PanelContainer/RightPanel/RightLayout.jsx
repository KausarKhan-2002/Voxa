import React from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import MessageList from "./MessageLayout/MessageList";
import MessageInput from "./MessageLayout/MessageInput";
import { useSelector } from "react-redux";
import ChatifyPage from "./ChatifyPage";

const RightLayout = () => {
  const user = useSelector((store) => store.userAccessInfo);

  if (typeof user == "string") return <ChatifyPage />;

  return (
    <div className="flex flex-col w-[65%] bg-slate-900">
      <ChatHeader />
      <div className="flex-1">
        <MessageList />
      </div>
      <MessageInput />
    </div>
  );
};

export default RightLayout;
