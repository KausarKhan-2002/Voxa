import React from 'react'
import ChatListItem from './ChatListItem'

const ChatList = () => {
  return (
    <div className="h-[73.5vh] pt-3 overflow-y-auto custom-scrollbar">
      <ChatListItem />
    </div>
  )
}

export default ChatList
