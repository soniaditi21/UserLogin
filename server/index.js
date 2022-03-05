import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/routes.js';

dotenv.config(); 
const app = express(); //express ko initial krna hota h app k 7

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/',Routes);


const username= process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const URL=`mongodb+srv://${username}:${password}@userscluster.zpiws.mongodb.net/LOGGEDUSER?retryWrites=true&w=majority`;

const Connection = async () => {
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database Connected Succesfully");
      } catch(error) {
        console.log('Error: ',error.message);
      }
 
}
Connection();

const PORT=8000;
app.listen(PORT, () => console.log(`Your server is running successfully on port ${PORT}`))