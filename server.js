const express = require('express');

const https =require('https');
const app = express();

app.get('/',function(req,res){
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Delhi,in&appid=43cd365db03edbe70f2da8efe0a89c8a&units=metric&='
https.get(url,function(response){
  console.log(response.stdout)
response.on('data',function(data){
  const weather = JSON.parse(data);
  console.log(weather);
const he = {
  name : 'sayantan',
  favouritefood : '12'
}
  const descrip = weather.weather[0].description
  const dat = weather.main.temp
  res.write('<p>the temp is' + dat+'<p>');
res.write("<h1>the weather is" + descrip+ "</h1>");
res.send();
});
});
});


app.listen(3000);
