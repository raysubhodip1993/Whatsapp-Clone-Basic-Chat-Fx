
import { useEffect,useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios"


function App() {


const [messages,  setMessages] = useState([]);


useEffect(() => {
  axios.get('/messages/sync')
  .then(response => {
    setMessages(response.data);

  })
}, []);



//listener
useEffect(()=>{
  
  var pusher = new Pusher('c9a8860e3b375b1ba2bc', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (data) => {
    //alert(JSON.stringify(data));
    setMessages([...messages, data])  ///....messages = means all the current messages ; append to the existing list of the messages
  });

      return () => {
        //Even if msg changes there is only one listener
        channel.unbind_all();
        channel.unsubscribe();
      };

}, [messages])


console.log(messages);

  return (
    <div className="app">
   
      <div className="app_body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    
    </div>
  );
}

export default App;
