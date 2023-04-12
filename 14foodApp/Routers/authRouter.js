const express = require('express'); 
const authRouter = express.Router(); 
const userModel = require('../models/12userModel');

authRouter
.route('/signup')
.get(middleware1,getSignUp, middleware2)
.post(postSignUp)

authRouter
.route('/login')
.post(loginUser)

function middleware1(req, res, next){
    console.log('middleware1')
    next();     
}
function middleware2(req, res){
    console.log('middleware2')
    res.sendFile('/public/index.html', {root:__dirname})
}

function getSignUp(req, res, next){
    console.log('getSignUp') 
    next();  
}

function postSignUp(req, res){
    let obj = req.body
    res.json({
        message: "user signed up",
        data:obj
    })
}

async function loginUser(req, res){
    try{
        let data = req.body;
        let user = await userModel.findOne({email:data.email})
        if(user){
            //bcrypt --> compare
            if(user.password==data.password){
                return res.json({
                    message:"user logged in",
                    userDetail:data
                })
            }else{
                return res.json({
                    message:'wrong credentials'
                })
            }
        }else{
            return res.json({
                message:"user not exists"
            })
        }
    }catch(err){
        return res.status(500).json({
            error:err.message
        })
    }
}

module.exports=authRouter;