import React from 'react';

const FeedItem = ({avatar,content,displayName,image,timestamp,username}) => {
  return (
    <article>
        <img src={avatar} alt="Profile" className='w-11 h-11 rounded-full'/>
        <div className='flex items-center text-sm'>
            <h4 className='font-bold'> {displayName} </h4>
            <span className='text-gray-dark'> {username} </span>
            <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full'></div>
        </div>
    </article>
  )
}

export default FeedItem