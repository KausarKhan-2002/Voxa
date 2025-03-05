import React from 'react'
import ChatListItem from './ChatListItem'

const ChatList = ({users}) => {
  return (
    <div className="h-[73.5vh] pb-2 overflow-y-auto custom-scrollbar">
      <ChatListItem users={users} />
    </div>
  )
}

export default ChatList
