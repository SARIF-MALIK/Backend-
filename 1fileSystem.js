

const fs = require('fs'); 

const path = require('path'); 

const dirpath = path.join(__dirname, 'files')

for(let i = 1; i<=5; i++){
    fs.writeFileSync(dirpath+'/text'+i+'.txt', ''); 
}

fs.readdir(dirpath, (err, files)=>{
    files.forEach((item)=>{
        console.log(item); 
    })
})