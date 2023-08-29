const express = require('express'); 
const path = require('path'); 
const publicPath = path.join(__dirname, 'public'); 

const app = express(); 

// app.use(express.static( publicPath));     // app.use works for every path so should be defind below 

app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1>')
})

//  send html file 
app.get('/about', (req, res)=>{
    res.sendFile(publicPath+'/index.html')
}) 

// redirect 
app.get('/about-us', (req, res)=>{
    res.redirect('/about'); 
})

// 404 Page 
app.use((req,res)=>{
    res.status(404)
    res.sendFile('./public/404.html', {root:__dirname}); 
}) 

app.listen(3000, (err)=>console.log(err));   
