const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname,"../public");
app.use(express.static(publicDirectoryPath));

app.get('/',(req,res)=>{
    res.send('Welcome to the Home Page');
});

app.get('/weather',(req,res)=>{
    res.send('Welcome to the weather Page');
});

app.get('*',(req,res)=>{
    res.send('ERROR 404: Opps Page Cannot be found');
});

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});