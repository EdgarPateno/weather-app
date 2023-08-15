const express = require('express');
const https = require('https');
const app = express();

app.get('/', function(req, res){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=manila&appid=eab16427d49ab6d0bf55f161eca1f27d'
    https.get(url, function(response){
        console.log(response);
        console.log(response.statusCode); // status code 200
        response.on('data', function(data){
            console.log(data);
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            // const object = {
            //     name: 'Edgar',
            //     anime: 'Flame of Reca',
            //     skills: 'skill-less'
            // }
            // console.log(JSON.stringify(object));
            const temp = weatherData.main.temp;
            console.log(temp);
            // access weather description from the API
            // access the key value of an array element
            // access the index of the element which is an object
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgURL='https://openweathermap.org/img/wn/'+icon+'@2x.png';
            console.log(weatherDescription);


            //res.send('<h1>temperature' + ' ' + temp + ' degrees Celsius</h1>');
            //res.send('Weather' + ' is ' + weatherDescription);
            res.write('<h1>temperature' + ' ' + temp + ' &deg;</h1>');
            res.write('<p>The weather' + ' is ' + weatherDescription + '</p>');
            res.write('<img src="' + imgURL + '"/>');
            res.send();

        })
    });
    // res.send('Weather app version 1.0 Server is up and running');
});

app.listen(3000, function(req, res){
    console.log('Server is running on the port 300');
});

