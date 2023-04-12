// let flag = false; 
const jwt = require('jsonwebtoken');
const JWT_KEY = 'rabsldfka12344';

function protectRoute(req, res, next){
    if(req.cookies.isLoggedIn){
        next();
    }else{
        return res.json({
            message:"Access denied, please login"
        })
    }
}

module.exports=protectRoute;