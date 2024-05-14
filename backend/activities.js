const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/me/activities', async (req, res) => {
  try {
    const response = await axios.get(`https://api.lanyard.rest/v1/users/${global.id}`);

    let spotify;
    const spotistatus = response.data.data.listening_to_spotify;

    if (spotistatus === true) {
      spotify = response.data.data.spotify;
       if (spotify.artists && typeof spotify.artists === 'string') {
        spotify.artists = spotify.artists.replace(/;/g, ',');
      }
    } else {
      spotify = false;
    }

    let activities = response.data.data.activities;
    // De esta forma el estado personalizado no lo devolverá la API
    activities = activities.filter(activity => activity.name !== 'Custom Status');

    let act;
    //tambien quita spotify porque pa qué si ya lo devuelves arriba 
    const filteredActivities = activities.filter(activity => activity.name !== 'Spotify');

    if (filteredActivities.length === 0) {
      act = false;
    } else {
      act = filteredActivities;
    }

    const responseData = {
      spotify,
      act,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
