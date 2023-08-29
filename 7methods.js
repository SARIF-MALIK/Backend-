const express = require('express'); 

const app = express(); 

// middleware func -> post, front->json 
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
    },
    {
        id:4,
        name:"Ravi"
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
    console.log(req.query);                  /// in get method /user/?name=abhishek&age=28; 
    res.send(users);                                      //{name: abhishek, age: 28} in req.query 
}

function postUser(req, res){
    users = [...users, req.body];
    res.json({
        mes:"data pkt received",
        user: users
    })
}

function updateUser(req, res){
    console.log(req.body);               
    res.json({
        "msg":"data successfully updated"
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