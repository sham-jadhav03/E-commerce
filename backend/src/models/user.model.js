import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email:{
    type: String,
    require:true
  },
  password: {
    type:String,
    require:true
  },
  contact:{
    type: String,
    require: true
  }, 
  role: {
    type:String,

  }
})

const userModel = mongoose.model('User', userSchema)

export default userModel