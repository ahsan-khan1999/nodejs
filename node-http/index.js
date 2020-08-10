const http =  require('http')
const fs = require('fs')
const path = require('path')

const hostname = 'localhost'
const port = 3000;

// const server = http();

const server = http.createServer((req,res) => {
    if (req.method == 'GET'){
        var fileUrl;
    if(req.url == '/'){
        fileUrl = '/status.html'
    }
    else{
        fileUrl = req.url;   
    }
    var filePath = path.resolve('./public'+fileUrl);
    const fileExt = path.extname(filePath);

    if(fileExt == '.html'){
        fs.exists(filePath,(exists) => {
            if(!exists){
                res.statusCode = 404;
                res.setHeader('Content_Type','text/html');
                res.end('<html><body><h1>Error 404 File Not Found!</html></body></h1>')
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html')
            fs.createReadStream(filePath).pipe(res);
        })
    }
    else{
                res.statusCode = 404;
                res.setHeader('Content_Type','text/html');
                res.end('<html><body><h1>Error 404 Html File Not Found!</html></body></h1>')
                return;
    }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content_Type','text/html');
        res.end('<html><body><h1>Error 404 Req Method Not Supported!</html></body></h1>')
        return;
    } 
    

    // console.log(req.headers);

    // res.statusCode = 200;
    // res.setHeader('Content-Type','text/html');
    // res.end('<html><body><h1>Hello World</html></body></h1>')
})

server.listen(port,hostname,() =>{
    console.log(`Server is Listening At ${hostname} ${port}`)
})