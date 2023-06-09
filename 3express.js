const express = require('express'); 
const path = require('path'); 
const publicPath = path.join(__dirname, 'public'); 

const app = express(); 

app.use(express.static( publicPath)); 

app.get('/about', (req, res)=>{
    res.sendFile(publicPath+'/index.html')
}) 


app.listen(3000, (err)=>console.log(err));   
