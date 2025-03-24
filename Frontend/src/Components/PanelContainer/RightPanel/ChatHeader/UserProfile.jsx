import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((store) => store.userAccessInfo);

  if (typeof user === "string") return;

  return (
    <div className="bg-slate-900 min-h-[94vh] flex flex-col justify-center items-center">
      <div>
       <div className="avatar avatar-online">
       <img src={user.image} alt="profile" className="rounded-full w-40" />
       </div>
        <h3 className="text-center font-medium">{user.name}</h3>
        <p className="text-center mt-1 text-slate-400 text-sm">{user.phoneNumber}</p>
      </div>
    </div>
  );
};

export default UserProfile;
