import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import TypeSend from './TypeSend'

function Right() {
  return (
    <div className="w-[70%] text-gray-400 bg-slate-900 flex flex-col h-screen">
      
      <div className="flex-none">
        <ChatUser />
      </div>

      
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>

      
      <div className="flex-none">
        <TypeSend />
      </div>
    </div>
  )
}

export default Right
