import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import ChatListLayout from './ChatListLayout/ChatListLayout'

const LeftLayout = () => {
  return (
    <div className="w-[35%] bg-slate-800 flex min-h-full overflow-hidden">
      <Sidebar />
      <ChatListLayout />
    </div>
  )
}

export default LeftLayout
