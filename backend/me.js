const express = require('express');
const axios = require('axios');
const router = express.Router();
/*const { createClient } = require('redis');

const client = createClient({
    password: process.env.REDISSECRET,
    socket: {
        host: process.env.REDISHOST,
        port: process.env.REDISPORT
    }
});

async function loadredis() {
  await client.connect();
  console.log("redis cargao")
}

loadredis();
*/ //chau redis, vercel no te quiere
router.get('/me', async (req, res) => {
  try {
    const response = await axios.get(`https://api.lanyard.rest/v1/users/${global.id}`);

    const avatar = response.data.data.discord_user.avatar;
    const status = response.data.data.discord_status;

    const responseData = {
      avatar,
      status
    };
   
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/meteo', async (req, res) => {
  /*const meteoredischeck = await client.get('meteo');
  if(meteoredischeck == null){ 
  */try{
    const response = await axios.get("https://api.weatherapi.com/v1/current.json?key="+global.apikey+"&q="+ global.ciudad +"&aqi=no&lang=es"); //se debería de guardar en redis o algo? evidentemente pero 2 cosas: 1, nadie me va a petar esto i think, si alguien me lo peta me jodo 2, la api es bastante rápida no es necesario cachear [HECHO]
    const temp = response.data.current.temp_c;
    const condicion = response.data.current.condition.text;
    const icon = response.data.current.condition.icon;

    const limpio = {
      temp,
      condicion,
      icon
  }
   
   /* await client.set('meteo', JSON.stringify(limpio), {
      EX: 300
    });
    */res.json(limpio)
  } catch (error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
/*else {
  res.json(JSON.parse(meteoredischeck))
}*/
//ya que hice el coñazo del redis podría meterlo para todo lo otro pero que puta pereza macho VERCEL NO ME QUIERE
});

module.exports = router;
