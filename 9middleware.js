const express = require('express'); 

const app = express(); 
app.use(express.json())                  
app.listen(3000, (err)=>console.log(err));       

const authRouter = express.Router(); 
app.use('/auth', authRouter); 

authRouter
.route('/signup')
.get(middleware1,getSignUp, middleware2)
.post(postSignUp)

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