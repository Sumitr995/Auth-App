import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import ConnectDB from './config/DB.js';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js';


const app = express();
const Port = process.env.PORT || 3000 ;

//Connection of DB
ConnectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));

// API Endpoints
app.get('/', (req, res) => {
  res.send('APP is running 🚀');
});
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);




app.listen(Port,()=> console.log(`Server listening to port : ${Port}`));

