// eslint-disable-next-line

import mongoose from 'mongoose';




const userSchema =  new mongoose.Schema({
   fullname:{
     type: String,
     required: true,
     trim: true,
     min: 3 ,
     max: 30
   },
   username: {
     type: String,
     required: true,
     trim: true,
     unique: true,
     max: 35,
     index: true,
     lowercase: true
   },
   email: {
     type: String,
     required: true,
     trim: true,
     unique: true,
     lowercase: true
   },
   password: {
     type: String,
     required: true
   },
});

const user= mongoose.model('user', userSchema);

export default user;
