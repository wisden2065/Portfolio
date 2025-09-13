const express = require('express');
const app = express();

const port = 7000;

app.get('/', (req, res)=>{
    res.send('My Portfolio app')
});

app.listen(port, ()=>{
    console.log(`Server started at Port: ${port}`)
})