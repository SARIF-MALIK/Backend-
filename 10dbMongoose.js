const express = require('express'); 
const {mongoose, Schema} = require('mongoose')
const app = express(); 

// foodApp pass: YnXXq3FKPg11sK09


app.use(express.json()); 
app.listen(3000); 

const url = "mongodb+srv://foodApp:YnXXq3FKPg11sK09@cluster0.0gbwip0.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url)
.then((db)=>{
    console.log('db is connected')
    // console.log(db); 
}) 
.catch((e)=>console.log(e))

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:5
    },
    confirmPassword:{
        type:String,
        required:true,
        min:5
    }
  });

//   model
                  // mongoose.mode(modelName, Schema)
  const userModel = mongoose.model('model', userSchema);
//   user   

 (async function createUser(){
    let user={
        name:'Abhishek',
        email:'abc@gmail.com',
        password:'1234556',
        confirmPassword:'1234556'
    }
    let data = await userModel.create(user);
    console.log(data) 
  })();
