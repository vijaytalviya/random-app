const path =require('path');
const express =require('express');
const app = express();
const publicPath= path.join(__dirname,"..","public");
const port = process.env.PORT || 3000 ;
app.use(express.static(publicPath));

fetch('/users').then(res => res.json())

app.listen(port,()=>{
    console.log("server is up");
});