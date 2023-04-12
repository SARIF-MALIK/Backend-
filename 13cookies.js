const express = require('express'); 
const userModel = require('./models/12userModel');
var cookieParser = require('cookie-parser')

const app = express(); 
app.use(express.json())
app.listen(3000, (err)=>console.log(err));       
app.use(cookieParser())


const userRouter = express.Router(); 
const authRouter = express.Router(); 
app.use('/user', userRouter); 
app.use('/auth', authRouter); 

userRouter 
.route('/') 
.get(getUsers) 
.post(postUser)  
.patch(updateUser)  
.delete(deleteUser)  

userRouter
.route('/getCookies')
.get(getCookies)

userRouter
.route('/setCookies')
.get(setCookies)


userRouter  
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

function setCookies(req, res){
    // res.setHeader('Set-Cookie', 'isLoggedIn=true');
    res.cookie('isLoggedIn', true, {maxAge:100*60*60*24}); 
    res.send('cookies has been set')
}

function getCookies(req, res){
    let cookies = req.cookies
    console.log(cookies); 
    res.send('cookies sent')
}