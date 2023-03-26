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