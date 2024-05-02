const express = require('express');
const cors = require('cors');
require('dotenv').config();
const activitiesRouter = require('./activities');
const meRouter = require('./me');
const radioRouter = require('./radio');



const app = express();
const PORT = process.env.PORT || 3000;

//CONFIG
global.id = '725316907187568701'; //El ID del usuario de Discord
global.url = process.env.URL_RADIO; //La url de la radio
global.logs = process.env.LOGS; //logs discord
global.ciudad = process.env.CITY; // pues donde vives
global.apikey = process.env.APIKEY; //api key de weatherapi.com
global.secretredis = process.env.REDISSECRET; //redis secret
global.hostredis = process.env.REDISHOST; //redis host
global.portredis = process.env.REDISPORT; //redis port

app.use(cors());

app.use(activitiesRouter);
app.use(meRouter);
app.use(radioRouter);

app.listen(PORT, async () => {


  console.log(`Server is running on port ${PORT}`);
});