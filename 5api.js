const express = require('express'); 
const dbConnect = require('./4mongodb'); 

const app = express(); 

app.get('/', async (req, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray(); 
    console.log(data);  
    res.send(data); 
})

app.listen(3000); 


// API application prog interface 
// REST API it follow set of rules, standard practise 
// -> res should be same irrespective of req platform 
// -> routes should be on the basis of nouns  
// -> http methods used get, patch, post, delete
// -> data always in json format 
// -> stateless api 