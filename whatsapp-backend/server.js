//importing
import express from "express";
import mongoose from "mongoose";
import Pusher from 'pusher'
import Messages from "./dbMessages.js"
import cors from "cors"

//app config
const app= express();
const port= process.env.port || 9000;
const pusher = new Pusher({
    appId: "1113100",
    key: "c9a8860e3b375b1ba2bc",
    secret: "3f9fc5e5181e211483dd",
    cluster: "eu",
    useTLS: true
  });

//middlewares
app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// });

//DB config
const conn_url= 'mongodb+srv://admin:root@cluster0.me3yu.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(conn_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db=mongoose.connection;
//change stream connection
db.once('open',()=>{
    console.log("DB is connected");


    //
    const msgCollection= db.collection("messagecontents");//Collection from the 
    const changeStream= msgCollection.watch();

    changeStream.on('change',(change)=>{
        console.log(change);
    
    if(change.operationType == 'insert'){ // Check if the chnage operation was of what type? If insert then enter condition... 
        const messageDetails= change.fullDocument; // fetch the change string from the DB
        pusher.trigger('messages', 'inserted',
        {
            name: messageDetails.name, // fetch details of the name field from the DB to the name variable
            message: messageDetails.message, // fetch details of the message field from the DB to the message variable
            timestamp: messageDetails.timestamp,
            recieved: messageDetails.recieved
        }
        )
    } else{
        console.log('Error Triggering Push');
    }
    
    });
});


//?????
//api routes
app.get('/', (req,res)=> res.status(200).send('hello world'));


app.get("/messages/sync", (req,res) => {
        
    Messages.find((err,data) => {
        if(err){
            res.status(500).send(err);
        }

        else{
            res.status(200).send(data)
        }
    });
});

app.post("/messages/new", (req,res) => {
        const dbMessage=req.body;
        
        Messages.create(dbMessage,(err,data) => {
            if(err){
                res.status(500).send(err);
            }

            else{
                res.status(201).send(data)
            }
        });
    });



//listener
app.listen(port,()=> console.log(`Listening on localhost:${port}`));
