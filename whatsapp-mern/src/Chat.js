import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, SearchOutlined, MoreVert, SettingsInputAntenna} from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic';
import React from 'react'
import "./Chat.css"

function Chat() {
    return (
        
            <div className="chat">
                <div className=" chat_header">
                   <Avatar />

                   <div className="chat_headerInfo">
                       <h3>Room Name</h3>
                       <p>Last seen at...</p>
                   </div>

                   <div className="chat_headerRight">

                       <IconButton>
                       <SearchOutlined />
                       </IconButton >

                       <IconButton>
                           <AttachFile />
                           </IconButton>

                        <IconButton>
                            <MoreVert />
                        </IconButton>


                   </div>

                </div>

                <div class="chat_body">
                <p class="chat_message"> 
                    
                   <span className="chat_name"> Ray</span>

                    
                    This is a message
                    
                    <span className="chat_timestamp">
                            {new Date().toUTCString()}

                    </span>
                    
                    
                    </p>


                    <p class="chat_message"> 
                    
                    <span className="chat_name"> Ray</span>
 
                     
                     This is a message
                     
                     <span className="chat_timestamp">
                             {new Date().toUTCString()}
 
                     </span>
                     
                     
                     </p>

                     <p class="chat_message chat_reciever"> 
                    
                    <span className="chat_name"> Ray</span>
 
                     
                     This is a message
                     
                     <span className="chat_timestamp">
                             {new Date().toUTCString()}
 
                     </span>
                     
                     
                     </p>
            </div>

            <div className="chat_footer">

                <InsertEmoticonIcon/>
                <form>
                    <input  
                    placeholder="Type a message"
                    type="text" />
                    <button  type="submit">Send a message</button>

                </form>
                <MicIcon />


            </div>


            </div>

            
     
    )
}

export default Chat
