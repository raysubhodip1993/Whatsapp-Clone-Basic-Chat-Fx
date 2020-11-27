import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar,IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
           
           <div className="sidebar_header">


                <Avatar src="https://media-exp1.licdn.com/dms/image/C5635AQHiyjWafZ4MFw/profile-framedphoto-shrink_100_100/0/1604288556419?e=1606377600&v=beta&t=_ZozotKuZDFQxBFqDIth1wVeDssFIMrIHkOWgT1JXhE"/>
           <div className="sidebar_headerRight">
               <IconButton>
               <DonutLargeIcon/>
               </IconButton>

               <IconButton>
               <ChatIcon/>
               </IconButton>

               <IconButton>
               <MoreVertIcon/>
               </IconButton>
                

            </div>

           </div>

           <div className="sidebar_search">
               <div className="sidebar_searchContainer">
               <SearchOutlined/>
                        <input placeholder= "Search or start new chat" type="text" />


               </div>
         
           </div>

           <div className="sidebar_chats">
                   <SidebarChat />
                   <SidebarChat />
                   <SidebarChat />
               

               </div>
        
        </div>
    )
}

export default Sidebar
