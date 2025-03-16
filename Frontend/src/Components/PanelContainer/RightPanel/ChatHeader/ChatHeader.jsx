import React from "react";
import SearchChat from "./SearchChat";
import { Link } from "react-router-dom";
import MessageOptions from "./MessageOptions";
import { useSelector } from "react-redux";

const ChatHeader = () => {
  const user = useSelector((store) => store.userAccessInfo);

  return (
    <section className="flex items-center gap-10 bg-slate-700 px-5">
      <Link
        to={"/userprofile"}
        className="flex-1 py-2 cursor-pointer flex items-center gap-3 active:bg-slate-800"
      >
        <img className="w-11 h-11 rounded-full" src={user.image} alt="" />
        <div>
          <h3 className="font-medium">{user?.name}</h3>
          <p className="text-xs text-slate-300 mt-[2px]">{user.status}</p>
        </div>
      </Link>

      <SearchChat />
      <MessageOptions />
    </section>
  );
};

export default ChatHeader;
