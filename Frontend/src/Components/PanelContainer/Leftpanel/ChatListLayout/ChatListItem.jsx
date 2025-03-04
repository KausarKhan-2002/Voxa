import React from "react";

const ChatListItem = () => {
  return (
    <section className="flex justify-between items-center gap-3 px-3 cursor-pointer border-t-[1px] py-3 border-slate-700 hover:bg-slate-900 transition">
      <div>
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
          alt="Profile"
        />
      </div>

      <div className="flex justify-between w-[84%] border-slate-600">
        <div>
          <h3>Xenet obroy</h3>
          <p className="text-xs">Hello bro where are you</p>
        </div>
        <p className="text-slate-400 text-sm">Yesterday</p>
      </div>
    </section>
  );
};

export default ChatListItem;
