import React from 'react';
import { HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  PopulerIcon,ImageIcon,GIFIcon,PollIcon,EmojiIcon,ScheduleIcon,ReplyIcon,ReTweetIcon,LikeIcon,ShareIcon,SearchIcon } from '../icons/icon';

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between px-2 w-72 bg-blue-200'>
      <div>
        <HomeIcon/>
        <ExploreIcon/>
        <NotificationsIcon/>
        <MessagesIcon/>
        <BookmarksIcon/>
        <ListsIcon/>
        <ProfileIcon/>
        <MoreIcon/>
      </div>
      <div>Alt</div>
        
    </div>
  )
}

export default Sidebar