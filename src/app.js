const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname,"../public");
const views_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',views_path);
hbs.registerPartials(partials_path);
app.use(express.static(publicDirectoryPath));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/weather',(req,res)=>{
    res.render('weather');
});

app.get('*',(req,res)=>{
    res.render('404error',{
        errorMsg: 'Oops! Page Not Found'
    });
});

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});