import { memo } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";

const TopChatList = () => {
  // console.log("TopChatList");

  return (
    <div className="flex justify-between items-center px-4 pt-5">
      <h2 className="text-2xl font-bold text-green-300">
        Chat<span className="text-blue-50">ify</span>
      </h2>

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

export default memo(TopChatList);
