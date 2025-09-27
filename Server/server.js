import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import ConnectDB from './config/DB.js';


const app = express();
const Port = process.env.PORT || 3000 ;

//Connection of DB
ConnectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));

app.get('/', (req, res) => {
  res.send('APP is running 🚀');
});



app.listen(Port,()=> console.log(`Server listening to port : ${Port}`));

