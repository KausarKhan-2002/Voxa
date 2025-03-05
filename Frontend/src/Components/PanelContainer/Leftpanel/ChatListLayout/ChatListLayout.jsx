import React, { useState } from "react";
import TopChatList from "./TopChatList";
import SearchBar from "./SearchBar";
import ChatFilter from "./ChatFilter";
import ChatList from "./ChatList";

const userContact = [
  {
    id: 1,
    name: "Amit Sharma",
    chats: ["Namaste!", "Kaise ho?", "Milte hain jald!"],
    lastDate: "2025-03-05",
    lastTime: "today",
    image: "https://i.pravatar.cc/150?img=1",
    status: "online",
  },
  {
    id: 2,
    name: "Priya Verma",
    chats: ["Hello!", "Abhi busy hoon.", "Baad me baat karein?"],
    lastDate: "2025-03-04",
    lastTime: "yesterday",
    image: "https://i.pravatar.cc/150?img=2",
    status: "offline - last seen 2 hours ago",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    chats: ["Suprabhat!", "Kya plan hai?", "Jald milte hain."],
    lastDate: "2025-03-06",
    lastTime: "tomorrow",
    image: "https://i.pravatar.cc/150?img=3",
    status: "online",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    chats: ["Kya tum madad kar sakte ho?", "Yeh dekho!", "😂 Bohot mazedaar hai!"],
    lastDate: "2025-03-03",
    lastTime: "2 days ago",
    image: "https://i.pravatar.cc/150?img=4",
    status: "offline - last seen yesterday",
  },
  {
    id: 5,
    name: "Vikram Singh",
    chats: ["Are bhai!", "Kya chal raha hai?", "Aaj raat game khelenge?"],
    lastDate: "2025-03-02",
    lastTime: "3 days ago",
    image: "https://i.pravatar.cc/150?img=5",
    status: "online",
  },
  {
    id: 6,
    name: "Ananya Iyer",
    chats: ["Main baad me call karungi.", "Details bhejo.", "Theek hai!"],
    lastDate: "2025-03-01",
    lastTime: "4 days ago",
    image: "https://i.pravatar.cc/150?img=6",
    status: "offline - last seen 30 minutes ago",
  },
  {
    id: 7,
    name: "Rohan Das",
    chats: ["Kaha ho?", "Milte hain!", "Bohot acha idea hai!"],
    lastDate: "2025-03-07",
    lastTime: "tomorrow",
    image: "https://i.pravatar.cc/150?img=7",
    status: "online",
  },
  {
    id: 8,
    name: "Neha Gupta",
    chats: ["Message mil gaya.", "Main aa rahi hoon.", "Intezaar nahi kar sakti!"],
    lastDate: "2025-02-29",
    lastTime: "5 days ago",
    image: "https://i.pravatar.cc/150?img=8",
    status: "offline - last seen 5 hours ago",
  },
  {
    id: 9,
    name: "Arjun Kumar",
    chats: ["Kal milte hain!", "Dhyan rakhna.", "Bohot dhanyawad!"],
    lastDate: "2025-03-05",
    lastTime: "today",
    image: "https://i.pravatar.cc/150?img=9",
    status: "offline - last seen just now",
  },
  {
    id: 10,
    name: "Pooja Nair",
    chats: ["Mujhe yeh bohot pasand aaya!", "Bohot mazedaar!", "Yakeen nahi ho raha!"],
    lastDate: "2025-02-28",
    lastTime: "6 days ago",
    image: "https://i.pravatar.cc/150?img=10",
    status: "online",
  },
];


const ChatListLayout = () => {
  const [users, setUsers] = useState(userContact);
  // console.log("ChatListLayout");

  return (
    <section className="w-full">
      <TopChatList />
      <SearchBar setUsers={setUsers} saveUsers={userContact} />
      <ChatFilter />
      <ChatList users={users} />
    </section>
  );
};

export default ChatListLayout;
