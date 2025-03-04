import React from "react";
import { FiFolderPlus } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";

const TopChatList = () => {
  return (
    <div className="flex justify-between items-center px-4 py-5">
      <h2 className="text-2xl font-semibold">Chats</h2>

      <div className="flex items-center gap-5">
        <button
          className="cursor-pointer"
          onClick={() => alert("Coming soon...")}
        >
          <FiFolderPlus size={20} />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => alert("Coming soon...")}
        >
          <HiOutlineDotsVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default TopChatList;
