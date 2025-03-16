import React, { useState } from "react";
import TopChatList from "./TopChatList";
import SearchBar from "./SearchBar";
import ChatFilter from "./ChatFilter";
import ChatList from "./ChatList";

const userContact = [
  {
    id: 1,
    name: "Amit Sharma",
    about: "Tech enthusiast and coffee lover ☕",
    phoneNumber: "+91 9876543210",
    chats: ["Namaste!", "Kaise ho?", "Milte hain jald!"],
    lastDate: "2025-03-05",
    lastTime: "today",
    image: "https://i.pravatar.cc/150?img=1",
    status: "online",
    newMessage: true,
  },
  {
    id: 2,
    name: "Priya Verma",
    about: "Travel addict ✈️ | Foodie 🍕",
    phoneNumber: "+91 9123456789",
    chats: ["Hello!", "Abhi busy hoon.", "Baad me baat karein?"],
    lastDate: "2025-03-04",
    lastTime: "yesterday",
    image: "https://i.pravatar.cc/150?img=2",
    status: "offline - last seen 2 hours ago",
    newMessage: false,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    about: "Gamer 🎮 | Coder 💻",
    phoneNumber: "+91 9988776655",
    chats: ["Suprabhat!", "Kya plan hai?", "Jald milte hain."],
    lastDate: "2025-03-06",
    lastTime: "tomorrow",
    image: "https://i.pravatar.cc/150?img=3",
    status: "online",
    newMessage: false,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    about: "Music is life 🎶",
    phoneNumber: "+91 9765432101",
    chats: ["Kya tum madad kar sakte ho?", "Yeh dekho!", "😂 Bohot mazedaar hai!"],
    lastDate: "2025-03-03",
    lastTime: "2 days ago",
    image: "https://i.pravatar.cc/150?img=4",
    status: "offline - last seen yesterday",
    newMessage: true,
  },
  {
    id: 5,
    name: "Vikram Singh",
    about: "Sports freak 🏏 | Adventurer ⛰️",
    phoneNumber: "+91 9867543210",
    chats: ["Are bhai!", "Kya chal raha hai?", "Aaj raat game khelenge?"],
    lastDate: "2025-03-02",
    lastTime: "3 days ago",
    image: "https://i.pravatar.cc/150?img=5",
    status: "online",
    newMessage: false,
  },
  {
    id: 6,
    name: "Ananya Iyer",
    about: "Avid reader 📖 | Nature lover 🌿",
    phoneNumber: "+91 9112233445",
    chats: ["Main baad me call karungi.", "Details bhejo.", "Theek hai!"],
    lastDate: "2025-03-01",
    lastTime: "4 days ago",
    image: "https://i.pravatar.cc/150?img=6",
    status: "offline - last seen 30 minutes ago",
    newMessage: true,
  },
  {
    id: 7,
    name: "Rohan Das",
    about: "Love coding & problem-solving 💡",
    phoneNumber: "+91 9001122334",
    chats: ["Kaha ho?", "Milte hain!", "Bohot acha idea hai!"],
    lastDate: "2025-03-07",
    lastTime: "tomorrow",
    image: "https://i.pravatar.cc/150?img=7",
    status: "online",
    newMessage: false,
  },
  {
    id: 8,
    name: "Neha Gupta",
    about: "Dance is my passion 💃",
    phoneNumber: "+91 9556677889",
    chats: ["Message mil gaya.", "Main aa rahi hoon.", "Intezaar nahi kar sakti!"],
    lastDate: "2025-02-29",
    lastTime: "5 days ago",
    image: "https://i.pravatar.cc/150?img=8",
    status: "offline - last seen 5 hours ago",
    newMessage: true,
  },
  {
    id: 9,
    name: "Arjun Kumar",
    about: "Fitness freak 💪 | Coffee lover ☕",
    phoneNumber: "+91 9223344556",
    chats: ["Kal milte hain!", "Dhyan rakhna.", "Bohot dhanyawad!"],
    lastDate: "2025-03-05",
    lastTime: "today",
    image: "https://i.pravatar.cc/150?img=9",
    status: "offline - last seen just now",
    newMessage: false,
  },
  {
    id: 10,
    name: "Pooja Nair",
    about: "Artist 🎨 | Cat mom 🐱",
    phoneNumber: "+91 9667788990",
    chats: ["Mujhe yeh bohot pasand aaya!", "Bohot mazedaar!", "Yakeen nahi ho raha!"],
    lastDate: "2025-02-28",
    lastTime: "6 days ago",
    image: "https://i.pravatar.cc/150?img=10",
    status: "online",
    newMessage: true,
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
