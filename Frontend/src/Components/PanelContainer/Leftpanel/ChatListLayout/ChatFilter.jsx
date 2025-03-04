import React, { useState } from "react";

const filters = [
  { id: "A", label: "All" },
  { id: "U", label: "Unread" },
  { id: "F", label: "Favourites" },
  { id: "G", label: "Groups" },
];

const ChatFilter = () => {
  const [isActive, setIsActive] = useState("A");

  function handleButton(id) {
    setIsActive(id);
    alert("Coming soon..");
  }

  return (
    <div className="flex gap-3 text-sm mx-3 mt-2">
      {filters.map(({ id, label }) => {
        const isActiveClass =
          isActive === id
            ? "bg-slate-900 text-green-400"
            : "bg-slate-700 hover:bg-slate-800";

        return (
          <button
            key={id}
            onClick={() => handleButton(id)}
            className={`px-3 py-2 rounded-lg cursor-pointer transition ${isActiveClass}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ChatFilter;
