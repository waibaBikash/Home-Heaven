import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.get("/api/test", async (req,res)=>{
  res.json({message:"hello form express endpoint!"});
});

app.listen(40000, ()=>{
  console.log("Server running on localhost:40000");
});