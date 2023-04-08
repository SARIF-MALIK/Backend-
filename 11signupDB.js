const express = require('express'); 
const {mongoose, Schema} = require('mongoose')
const key = require('./10apikey'); 
const emailValidator = require("email-validator");

const app = express(); 
app.use(express.json())
app.listen(3000, (err)=>console.log(err));       

const useRouter = express.Router(); 
const authRouter = express.Router(); 
app.use('/user', useRouter); 
app.use('/auth', authRouter); 

useRouter 
.route('/') 
.get(getUsers) 
.post(postUser)  
.patch(updateUser)  
.delete(deleteUser)  

useRouter  
.route('/:id') 
.get(getUserById); 

authRouter
.route('/signup')
.get(getSignUp)
.post(postSignUp)

async function getUsers(req, res){
    let allUsers = await userModel.findOne({name:"Abhishek"}); 
    res.json({msg:'list of all users', data:allUsers}); 
}

function postUser(req, res){
    res.json({
        mes:"data pkt received",
        user: req.body
    })
}

async function updateUser(req, res){
    console.log(req.body.email); 
    let update = await userModel.findOneAndUpdate({'email':req.body.email}, {$set:{name:req.body.name}})
    res.json({
        "msg":"data successfully updated",
        "updated":update
    })
}

async function deleteUser(req, res){
    let del = await userModel.findOneAndDelete({'email':req.body.email})
    res.json({
        message:"data has been deleted",
        "deletedUser":del
    })
}

function getUserById(req, res){
    console.log(req.params.id);
    res.json({
        message:"req received",
        data:obj
    });

}

function getSignUp(req, res){
    res.sendFile('/public/index.html', {root:__dirname})
}

async function postSignUp(req, res){
    let dataObj = req.body
    let user = await userModel.create(dataObj);
    res.json({
        message: "user signed up",
        data:user
    })
}


const url = `mongodb+srv://foodApp:${key}@cluster0.0gbwip0.mongodb.net/?retryWrites=true&w=majority`

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
        unique:true,
        validate:function(){
            return emailValidator.validate(this.email);
        }
    },
    password:{
        type:String,
        required:true,
        min:5
    },
    confirmPassword:{
        type:String,
        required:true,
        min:5,
        validate:function(){
            return this.confirmPassword==this.password
        }
    }
  });

  userSchema.pre('save', function(){
    console.log('before saving in db')
    this.confirmPassword=undefined;
  })
  userSchema.post('save', function(doc){
    console.log('after saving in db', doc)
  })

//   model
                  // mongoose.mode(modelName, Schema)
  const userModel = mongoose.model('model', userSchema);
//   user   

//  (async function createUser(){
//     let user={
//         name:'Abhishek',
//         email:'abc@gmail.com',
//         password:'1234556',
//         confirmPassword:'1234556'
//     }
//     let data = await userModel.create(user);
//     console.log(data) 
//   })();