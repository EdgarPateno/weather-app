const express = require('express');
const https = require('https');
const app = express();

app.get('/', function(req, res){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=manila&appid=eab16427d49ab6d0bf55f161eca1f27d'
    https.get(url, function(response){
        console.log(response);
    });
    res.send('Weather app version 1.0 Server is up and running');
});

app.listen(3000, function(req, res){
    console.log('Server is running on the port 300');
});

