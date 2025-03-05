import React, { useEffect, useState } from "react";
import Loader from "../../../../utils/Loader";
import { IoMdSearch } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

const SearchBar = ({ setUsers, saveUsers }) => {
  const [isArrow, setIsArrow] = useState(false);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);

  function handleArrow() {
    setIsArrow(false);
    setSearch("");
  }

  function handleSearch(e) {
    const query = e.target.value.toLowerCase();

    const inputLength = e.target.value.length;
    // If not search value empty keep search icon

    if (inputLength == 0) {
      setIsArrow(false);
      setLoader(false);
    } else {
      setLoader(true);
    }
    setSearch(e.target.value);

    // If no query keep original users
    if (!query) {
      setUsers(saveUsers);
      return;
    }

    // Filter users based on saearch query
    const filterUser = saveUsers.filter((user) =>
      user.name.toLowerCase().includes(query)
    );

    setUsers(filterUser);
  }

  useEffect(() => {
    const timeout = setTimeout(() => setLoader(false), 200); 
    return () => clearTimeout(timeout)
  }, [search]);

  return (
    <div className="mt-3">
      <div className="flex items-center mx-3 px-2 py-2 rounded-lg bg-slate-900">
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
          onChange={handleSearch}
          type="text"
          value={search}
          placeholder="Search..."
          className="flex-1 outline-none border-none pl-4"
        />

        {loader && <Loader />}
      </div>
    </div>
  );
};

export default SearchBar;
