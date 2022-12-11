import React from 'react'

const UserBox = () => {
  return (
    <div className='flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200'>
        <img src="https://media-exp1.licdn.com/dms/image/D4D03AQEPj1WugNGXnw/profile-displayphoto-shrink_800_800/0/1665087736518?e=1676505600&v=beta&t=o8mDsKT8N0yqjB0D_xDmBfOe5NS7OYcMBulIgboXoTE" alt="Profie" className='w-11 h-11 rounded-full' />
        <div className='flex flex-col'>
            <span className='font-bold text-md text-black'>
                Yunus Emre Taşçı..
            </span>
            <span className='text-sm text-gray-dark'>@YunusemreTasci</span>
        </div>

        <div className='flex space-x-1'>
            <div div className = 'h-1 w-1 rounded-full bg-gray-900'/>
            <div div className = 'h-1 w-1 rounded-full bg-gray-900'/>
            <div div className = 'h-1 w-1 rounded-full bg-gray-900'/>
        </div>
    </div>
  )
}

export default UserBox