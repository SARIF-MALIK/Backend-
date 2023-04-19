const userModel = require('../models/12userModel');

module.exports.getUsers=async function getUsers(req, res){
    let allUsers = await userModel.find(); 
    res.json({msg:'list of all users', data:allUsers}); 
}

module.exports.postUser=function postUser(req, res){
    res.json({
        mes:"data pkt received",
        user: req.body
    })
}

module.exports.updateUser=async function updateUser(req, res){
    console.log(req.body.email); 
    let update = await userModel.findOneAndUpdate({'email':req.body.email}, {$set:{name:req.body.name}})
    res.json({
        "msg":"data successfully updated",
        "updated":update
    })
}

module.exports.deleteUser=async function deleteUser(req, res){
    let del = await userModel.findOneAndDelete({'email':req.body.email})
    res.json({
        message:"data has been deleted",
        "deletedUser":del
    })
}

module.exports.getUserById=function getUserById(req, res){
    console.log(req.params.id);
    res.json({
        message:"req received",
        data:obj
    });

}

// function getSignUp(req, res){
//     res.sendFile('/public/index.html', {root:__dirname})
// }

// async function postSignUp(req, res){
//     let dataObj = req.body
//     let user = await userModel.create(dataObj);
//     res.json({
//         message: "user signed up",
//         data:user
//     })
// }

// function setCookies(req, res){
//     // res.setHeader('Set-Cookie', 'isLoggedIn=true');
//     res.cookie('isLoggedIn', true, {maxAge:100*60*60*24}); 
//     res.send('cookies has been set')
// }

// function getCookies(req, res){
//     let cookies = req.cookies
//     console.log(cookies); 
//     res.send('cookies sent')
// }