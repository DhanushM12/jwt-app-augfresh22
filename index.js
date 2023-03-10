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
    jwt.sign(user, 'secretkey', function(err, token) {
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

app.listen(port, function(err){
    if(err){
        console.log(`Error in starting server : ${err}`)
        return;
    }
    console.log(`Server is up and running on port : ${port}` )
})