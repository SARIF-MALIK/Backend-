// let flag = false; 
const jwt = require('jsonwebtoken');
const JWT_KEY = 'rabsldfka12344';

function protectRoute(req, res, next){
    if(req.cookies.login){
        let isVerified=jwt.verify(req.cookies.login, JWT_KEY) 
        if(isVerified){
            next();
        }
        else{
            return res.json({
                message:"User not verified"
            })
        }
    }else{
        return res.json({
            message:"Access denied, please login"
        })
    }
}

module.exports=protectRoute;