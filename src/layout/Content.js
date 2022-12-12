import React,{useEffect,useState} from 'react';
import Divider from '../components/Divider';
import TweetBox from '../components/TweetBox';
import {
  PopulerIcon
} from "../icons/icon";
import db from "../firebase";
import FeedList from '../components/FeedList';

const Content = () => {
  const [tweets,setTweets]=useState([])
  useEffect(()=>{
      db.collection("feed").orderBy("timestamp","desc").onSnapshot(snapshot=>setTweets(snapshot.docs.map(doc=>doc.data())))
  },[])

  console.log(tweets)

  return (
    <main className='flex-1 flex flex-col border-r border-l border-gray-exteraLight'>
       <header className='sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-exteraLight bg-white'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base"/>
       </header>
       <div className='flex px-4 py-3 space-x-4'>
        < img src = "https://media-exp1.licdn.com/dms/image/D4D03AQEPj1WugNGXnw/profile-displayphoto-shrink_800_800/0/1665087736518?e=1676505600&v=beta&t=o8mDsKT8N0yqjB0D_xDmBfOe5NS7OYcMBulIgboXoTE"
        alt = "Profie"
        className = 'w-11 h-11 rounded-full'/>
        
          <TweetBox/>
        
       </div>
       <Divider/>
       
       <FeedList tweets={tweets}/>
       
    </main>
  )
}

export default Content