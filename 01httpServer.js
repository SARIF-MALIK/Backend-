
const http = require('http'); 
const fs = require('fs'); 


const server = http.createServer((req, res) =>{
    console.log('req has been made to server')
    // console.log(req);  
    // console.log(req.method)
    // console.log(req.url)

    // res.setHeader('Content-Type', 'text/plain'); 
    // res.write('hello, coders'); 

    // res.setHeader('Content-Type', 'text/html'); 
    // res.write('<h1>hello, coders</h1>'); 
    // res.write('<h1>How you doing?</h1>' ); 
    // res.end(); 
    let path= './public'; 
    switch(req.url){
        case '/':
            path+='/index.html'
            break;
        case '/about':
            path+='/about.html'
            break; 
        case '/about-me':
            res.statusCode = 301; 
            res.setHeader('Location', '/about'); 
            res.end(); 
            break; 
        default:
            path+='/404.html'
            res.statusCode = 404; 
    }
    fs.readFile(path, (err, fileData)=>{
        if(err){
            console.log(err); 
        }else{
            // res.write(fileData); 
            // res.end(); 
            res.end(fileData); 
        }
    })
}); 

server.listen(3000, 'localhost', ()=>{
    console.log('server is listening on port 3000')
})


