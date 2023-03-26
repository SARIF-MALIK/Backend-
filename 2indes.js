const fs = require('fs'); 
const path = require('path'); 

const dirPath = path.join(__dirname, '/crud');  
const filePath = dirPath+'/apple.txt'; 


fs.writeFileSync(filePath, 'this is a file data'); 


fs.appendFile(filePath, ' this is updated text',(err)=>console.log(err)); 

fs.readFile(filePath, 'utf-8' ,(err, text)=>{
    console.log(text); 
} )

fs.rename(filePath, dirPath+'/mac.txt', (err)=>console.log(err)); 