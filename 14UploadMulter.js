const express = require('express'); 
const app = express(); 

app.use(express.json());  // to accept json 
app.use(express.static('public'));  // to access public folder 





app.listen(3000, ()=>{
    console.log('listening to port 3000'); 
})