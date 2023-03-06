const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.json({message: "welcome to node js"})
    // res.send('<h1>Welcome to node js!!!</h1>')
})


app.listen(port, function(err){
    if(err){
        console.log(`Error in starting server : ${err}`)
        return;
    }
    console.log(`Server is up and running on port : ${port}` )
})