// const fs = require('fs');

// const filePath = '/home/vishesh/Documents/Devlopement/node-start/file.txt';
// const path = require("path");

// const dirname = path.dirname(filePath);
// const extention = path.extname(filePath);
// console.log(dirname);
// console.log(extention);

// const src = filePath;
// const dest = 'dir1/temp.txt'
// fs.copyFile(src,dest,(err)=>{
//   console.log("copy done");
// })

// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Error reading file: ${err}`);
//     return;
//   }
  
//   console.log(`File content:\n${data}`);
// });

// fs.appendFile(filePath,"class is going on", "utf-8", (err) =>{
//   console.log("append done")
// })

// fs.mkdir('dir1',(err) => {
//   console.log("dir formed");
// })

// fs.rmdir('dir1',(err) => {
//   console.log("removed")
// })

// fs.rename('file_renamed.txt','file.txt',(err)=>{
//   console.log("renamed");
// })

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/login') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Node.js Class</title></head><body>');
    res.write('<h1>Hello, Login!</h1>');
    res.write('</body></html>');
    res.end();
  } else if (req.url === '/') {
    const indexPath = path.join(__dirname, 'index.html');
    
    fs.readFile(indexPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Error loading index.html');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } 
});
const port = 3000;
const host = 'localhost';

server.listen(port,host,()=>{
  console.log(`server is listening on http://${host}:${port}`);
})