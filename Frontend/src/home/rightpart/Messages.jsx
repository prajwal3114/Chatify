import React from 'react'
import Message from './Message'

function Messages() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {/* Example repeated messages */}
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages
