import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
function Search() {
  return (
    <div className='h-[10vh]'>
      <div className='px-6 py-4'>
        <div className='flex space-x-3'>
        <label className="input  rounded-lg  w-[80%]">
            <input type="search" className="grow" placeholder="Search" />
        </label>
        <button>
            <IoSearchOutline  className='text-4xl p-2 hover:bg-gray-300 rounded-2xl duration-100'/>
        </button>
        </div>
        
    </div>
    </div>
  )
}

export default Search