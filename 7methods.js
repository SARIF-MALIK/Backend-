const express = require('express'); 

const app = express(); 
app.use(express.json())
app.listen(3000, (err)=>console.log(err));       

let users = [
    {
        id:1,
        name:"kartik"
    },
    {
        id:2,
        name:"partik"
    },
    {
        id:3,
        name:"Aryan"
    }
]; 

const useRouter = express.Router(); 
app.use('/user', useRouter); 

useRouter
.route('/')
.get(getUser) 
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

useRouter
.route('/:id')
.get(getUserById); 

function getUser(req, res){
    res.send(users); 
}

function postUser(req, res){
    users = [...users, req.body];
    res.json({
        mes:"data pkt received",
        user: req.body
    })
}

function updateUser(req, res){
    console.log(req.body); 
    res.json({
        "msg":"data updated"
    })
}

function deleteUser(req, res){
    users={};
    res.json({
        message:"data has been deleted"
    })
}

function getUserById(req, res){
    console.log(req.params.id);
    let paramId=req.params.id; 
    let obj={}; 
    for(let i=0;i<users.length;i++){
        if(users[i]['id']==paramId){
            obj=users[i]; 
        }
    }
    res.json({
        message:"req received",
        data:obj
    });

}