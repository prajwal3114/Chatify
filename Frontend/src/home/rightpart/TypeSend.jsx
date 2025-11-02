import React from 'react'
import { IoMdSend } from "react-icons/io"

function TypeSend() {
  return (
    <div>
      <div className='flex space-x-5 h-[8vh] text-center items-center'>
        <div className='w-[70%]'>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
          />
        </div>

        <button>
          <IoMdSend className='text-3xl' />
        </button>
      </div>
    </div>
  )
}

export default TypeSend
