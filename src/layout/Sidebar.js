import React, { useState } from 'react';
import twitterLogo from "../images/twitter.svg";
import { HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  PopulerIcon,ImageIcon,GIFIcon,PollIcon,EmojiIcon,ScheduleIcon,ReplyIcon,ReTweetIcon,LikeIcon,ShareIcon,SearchIcon } from '../icons/icon';
  import SideLink from '../components/SideLink';

  const sideLinks = [{
        name: "Home",
        icon: HomeIcon,
      },
      {
        name: "Explore",
        icon: ExploreIcon,
      },
      {
        name: "Notifications",
        icon: NotificationsIcon,
      },
      {
        name: "Messages",
        icon: MessagesIcon,
      },
      {
        name: "Bookmarks",
        icon: BookmarksIcon,
      },
      {
        name: "Lists",
        icon: ListsIcon,
      },
      {
        name: "Profile",
        icon: ProfileIcon,
      },
      {
        name: "More",
        icon: MoreIcon,
      },
    ]

const Sidebar = () => {
  const [active, setActive] = useState("Home")

  const handleMenuItemClick=(name)=>{
      setActive(name)
  }

  return (
    <div className='flex flex-col justify-between px-2 w-72'>
      <div>
        <div div className = 'mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest transition-colors duration-200' >
          <img src={twitterLogo} alt="Twitter Logo" className='w-9 h-9' />
        </div>
        <nav className='mb-4'>
          <ul>
            {
              sideLinks.map((({
                      name,
                      icon
                    }) => < SideLink key = {
                      name
                    }
                    name = {
                      name
                    }
                    Icon = {
                      icon
                    }
                    active = {
                      active
                    } onMenuItemClick={handleMenuItemClick}
                    /> ))
            }
            {/* <li><HomeIcon/></li> */}
            {/* <li><ExploreIcon/></li> */}
            {/* <li><NotificationsIcon/></li> */}
            {/* <li><MessagesIcon/></li> */}
            {/* <li><BookmarksIcon/></li> */}
            {/* <li><ListsIcon/></li> */}
            {/* <li><ProfileIcon/></li> */}
            {/* <li><MoreIcon/></li> */}
          </ul>
        </nav>
        {/* <HomeIcon/>
        <ExploreIcon/>
        <NotificationsIcon/>
        <MessagesIcon/>
        <BookmarksIcon/>
        <ListsIcon/>
        <ProfileIcon/>
        <MoreIcon/> */}
        <button className='bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transition-colors duration-200'>Tweet</button>
      </div>
      <div>Alt</div>
        
    </div>
  )
}

export default Sidebar