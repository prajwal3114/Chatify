import React from 'react'
import Search from './Search'
import User from './User'
import Logout from './logout'
function Left() {
  return (
    <div className='w-[30%] text-gray-400 bg-black
    '>
        <Search/>
        <User/>
        <Logout/>
    </div>
  )
}

export default Left