const express = require('express');
const bodyParser = require('body-parser');

const leaderRoute = express.Router();

leaderRoute.use(bodyParser.json());
leaderRoute.route('/')
.all( (req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content_Types', 'text/plain');
    next();
})

.get(( req,res,next ) => {
    res.end('Get Req is here from leaderRoute route')
})

.post( (req , res, next) => {
    res.end('Name attach in req is '+ req.body.name);
});
leaderRoute.route('/:leaderId')
.all( (req, res, next) => {
    res.end({'Content-Type': 'text/plain'});
    next();
})

.get((req,res,next) => {
    res.end('Wills send details of the dish: ' + req.params.dishId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})

.put( (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete( (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});


module.exports =    leaderRoute;
