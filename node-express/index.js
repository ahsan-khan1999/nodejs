const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json());

app.all('/dishes' , (req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content_Types', 'text/plain');
    next();
})

app.get('/dishes' ,( req,res,next ) => {
    res.end('Get Req is here')
});

app.post('/dishes' , (req , res, next) => {
    res.end('Name attach in req is '+ req.body.email);
})

app.use(express.static(__dirname +'/public'));
app.use((req,res,next) => {
    console.log(req.header);
    res.statusCode = 200;
    res.setHeader("Content-Type",'text/html');
    res.end('<html><body><h1>This is express server</h1></body></html>');
})

const server = http.createServer(app);

server.listen(3000,'localhost',() => {
    console.log('server is listening at 3000');
})
