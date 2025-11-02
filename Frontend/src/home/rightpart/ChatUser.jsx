import React from 'react'

function ChatUser() {
  return (
    <div>
      <div className='flex space-x-6 bg-gray-800 hover:bg-gray-700 duration-300 p-2 rounded-lg'>
        <div className='mx-[2%]'>
          <div className="avatar avatar-online">
            <div className="w-12 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                alt="user"
              />
            </div>
          </div>
        </div>

        <div className='mx-[30%]'>
          <h1 className='text-xl text-white'>Prajwal G</h1>
          <span className='text-sm text-gray-400'>Offline</span>
        </div>
      </div>
    </div>
  )
}

export default ChatUser
