import React from 'react'
import Users from '../leftpart/users.jsx'

function User() {
  return (
    <div>
      <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded'>
        Messages
      </h1>

      {/* overflow-y-auto but hidden scrollbar */}
      <div
        className='py-1 overflow-y-auto flex-1 no-scrollbar'
        style={{ maxHeight: 'calc(84vh - 10vh)' }}
      >
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
      </div>
    </div>
  )
}

export default User
