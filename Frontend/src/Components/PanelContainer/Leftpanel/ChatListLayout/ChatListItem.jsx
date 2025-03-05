import React, { useState } from "react";

const users = [
  {
    id: 1,
    name: "Amit Sharma",
    chats: ["Namaste!", "Kaise ho?", "Milte hain jald!"],
    lastDate: "2025-03-05",
    lastTime: "today",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Priya Verma",
    chats: ["Hello!", "Abhi busy hoon.", "Baad me baat karein?"],
    lastDate: "2025-03-04",
    lastTime: "yesterday",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    chats: ["Suprabhat!", "Kya plan hai?", "Jald milte hain."],
    lastDate: "2025-03-06",
    lastTime: "tomorrow",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    chats: [
      "Kya tum madad kar sakte ho?",
      "Yeh dekho!",
      "😂 Bohot mazedaar hai!",
    ],
    lastDate: "2025-03-03",
    lastTime: "2 days ago",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Vikram Singh",
    chats: ["Are bhai!", "Kya chal raha hai?", "Aaj raat game khelenge?"],
    lastDate: "2025-03-02",
    lastTime: "3 days ago",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Ananya Iyer",
    chats: ["Main baad me call karungi.", "Details bhejo.", "Theek hai!"],
    lastDate: "2025-03-01",
    lastTime: "4 days ago",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Rohan Das",
    chats: ["Kaha ho?", "Milte hain!", "Bohot acha idea hai!"],
    lastDate: "2025-03-07",
    lastTime: "tomorrow",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Neha Gupta",
    chats: [
      "Message mil gaya.",
      "Main aa rahi hoon.",
      "Intezaar nahi kar sakti!",
    ],
    lastDate: "2025-02-29",
    lastTime: "5 days ago",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Arjun Kumar",
    chats: ["Kal milte hain!", "Dhyan rakhna.", "Bohot dhanyawad!"],
    lastDate: "2025-03-05",
    lastTime: "today",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Pooja Nair",
    chats: [
      "Mujhe yeh bohot pasand aaya!",
      "Bohot mazedaar!",
      "Yakeen nahi ho raha!",
    ],
    lastDate: "2025-02-28",
    lastTime: "6 days ago",
    image: "https://i.pravatar.cc/150?img=10",
  },
];

const ChatListItem = () => {
  const [active, setActive] = useState("");
  return (
    <section className="">
      {users.map((user) => (
        <div
          onClick={() => setActive(user.id)}
          key={user.id}
          className={`${
            active == user.id && "bg-slate-900"
          } flex justify-between items-center gap-3 px-3 cursor-pointer border-t-[1px] py-3 border-slate-700 hover:bg-slate-900`}
        >
          <div>
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={user.image}
              alt="Profile"
            />
          </div>

          <div className="flex justify-between w-[84%] border-slate-600">
            <div>
              <h3>{user.name}</h3>
              <p className="text-xs">{user.chats[0]}</p>
            </div>
            <p className="text-slate-400 text-sm">{user.lastTime}</p>
          </div>
        </div>
      ))}
      {/* <div>
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
      </div> */}
    </section>
  );
};

export default ChatListItem;
