import React from 'react'

function Users() {
  return (
    <div>
        <div className='flex space-x-3 px-6 py-4 hover:bg-slate-700 duration-300 cursor-pointer'>
            <div className="avatar avatar-offline">
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
                </div>
            </div>
            <div>
                <h1 className='font-bold'>Prajwal G</h1>
                <span>prajwal.gaddle@gmail.com</span>
            </div>
        </div>
    </div>
  )
}

export default Users