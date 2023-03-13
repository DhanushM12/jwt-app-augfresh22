const express = require('express');
const app = express();
const port = 8080;
const jwt = require('jsonwebtoken')

app.get('/', (req, res) => {
    res.json({message: "welcome to node js"})
    // res.send('<h1>Welcome to node js!!!</h1>')
})

app.post('/tokenGenerate', (req, res) => {
    const user = {
        id: 12345,
        username: 'AugFreshers22',
        email: 'augfresh22@coding.com'
    }
    jwt.sign(user, 'secretkey', {expiresIn: '60s'}, function(err, token) {
        if(err){
            res.sendStatus(403)
        }
        else{
            res.json({
                token
            })
        }
      });    
})

app.post('/verifyToken', extractToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', function(err, data) {
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({message: 'User access granted', data})
        }
      });
})

function extractToken(req, res, next){
    const bearerHeader = req.headers['authorization']; // Bearer token
    if(bearerHeader !== undefined){
        const bearer = bearerHeader.split(' '); // ['Bearer', 'token']
        const bearerToken = bearer[1];
        req.token = bearerToken
        next();
    }
    else{
        res.sendStatus(403);
    }
}


app.listen(port, function(err){
    if(err){
        console.log(`Error in starting server : ${err}`)
        return;
    }
    console.log(`Server is up and running on port : ${port}` )
})