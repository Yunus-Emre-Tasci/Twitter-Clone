import React, { useState } from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icons/icon';
import db from "../firebase";
import firebase from 'firebase/compat/app';

const TweetBox = () => {
    const [content, setContent] = useState("")

    const sendTweet=()=>{
      if(content!==""){
        db.collection("feed").add({
            displayName:"Yunus Emre Taşçı",
            username:"@YunusEmre_Tasci",
            content:content,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: "https://media2.giphy.com/media/G3Hu8RMcnHZA2JK6x1/giphy.gif?cid=ecf05e47fhnvmdjown5wd4y6uw8zmdu69xwjoice2jdzt5lb&rid=giphy.gif&ct=g",
            avatar:"https://media-exp1.licdn.com/dms/image/D4D03AQEPj1WugNGXnw/profile-displayphoto-shrink_800_800/0/1665087736518?e=1676505600&v=beta&t=o8mDsKT8N0yqjB0D_xDmBfOe5NS7OYcMBulIgboXoTE"
        })

        setContent("")
      }
    }
  return (
    <div className='flex flex-col flex-1 mt-2 px-2'>
        <textarea className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent' placeholder="What's happening?" value={content} onChange={(e)=>setContent(e.target.value)}/>
        <div className='flex items-center justify-between'>
            <div className='flex -ml-3'>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                  <ImageIcon className="w-6 h-6 text-primary-base"/>
                </div>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                  <GIFIcon className="w-6 h-6 text-primary-base"/>
                </div>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                  <PollIcon className="w-6 h-6 text-primary-base"/>
                </div>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                  <EmojiIcon className="w-6 h-6 text-primary-base"/>
                </div>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                  <ScheduleIcon className="w-6 h-6 text-primary-base"/>
                </div>
            </div>
            <button className='bg-primary-base text-white rounded-full px-4 py-2 font-medium' onClick={sendTweet}>Tweet</button>
        </div>
    </div>
  )
}

export default TweetBox