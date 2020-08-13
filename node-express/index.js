const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dishRouter = require('./routes/route')
const promotionRoute = require('./routes/promotionRoute')
const leaderRoute = require('./routes/leaderRoute')

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json());

app.use('/dishes' ,dishRouter);
app.use('/promotions',promotionRoute);
app.use('/leaders',leaderRoute);
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
