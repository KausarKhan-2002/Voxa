import React from "react";
import TopChatList from "./TopChatList";
import SearchBar from "./SearchBar";
import ChatFilter from "./ChatFilter";
import ChatList from "./ChatList";

const ChatListLayout = () => {
  return (
    <section className="w-full">
      <TopChatList />
      <SearchBar />
      <ChatFilter />
      <ChatList />
    </section>
  );
};

export default ChatListLayout;
