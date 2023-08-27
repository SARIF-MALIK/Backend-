
const http = require('http'); 

const server = http.createServer((req, res) =>{
    console.log('req has been made to server')
}); 

server.listen(3000, 'localhost', ()=>{
    console.log('server is listening on port 3000')
})


