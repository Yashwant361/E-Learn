import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './database/db.js';

dotenv.config()
const app = express();

//using middleware
app.use(express.json())

app.get('/',(req,res)=>{
    res.write('Server Running fine');
    res.end()
})


//importing routes
import userRoutes from './routes/user.js'


//using routes
app.use('/api',userRoutes)


const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log('Server running on http://localhost:8085');
    connectDb()
})