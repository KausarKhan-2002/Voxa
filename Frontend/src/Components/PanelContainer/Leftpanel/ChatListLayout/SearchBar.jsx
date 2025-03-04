import React, { useState } from "react";
import Loader from "../../../../utils/Loader";
import { IoMdSearch } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

const SearchBar = () => {
  const [isArrow, setIsArrow] = useState(false);
  const [search, setSearch] = useState("");

  function handleArrow() {
    setIsArrow(false);
    setSearch("");
  }

  return (
    <div>
      <div className="flex items-center mx-3 px-2 py-1 rounded-lg bg-slate-900">
        <label>
          {isArrow ? (
            <FaArrowLeft
              className="cursor-pointer"
              onClick={() => handleArrow()}
              size={20}
            />
          ) : (
            <IoMdSearch size={20} />
          )}
        </label>
        <input
          onFocus={() => setIsArrow(true)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="Search..."
          className="flex-1 outline-none border-none pl-4"
        />

        {search.length > 0 && <Loader />}
      </div>
    </div>
  );
};

export default SearchBar;
