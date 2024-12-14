const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Hey I'm Dikshant Jaryal");
});

app.listen(3000,function(){
    console.log("App is listening on 3000 Port")
});