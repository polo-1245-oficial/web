const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/radio/nowPlaying', async (req, res) => {
    try{
    const response = await axios.get(global.url + "/currentsong");
    const song = response.data.replace(/.*? - | \[.*?\]/g, ''); // sin chatgpt que me hiciera estas cosas no podría sobrevivir
    res.json({ nowPlaying: song.trim() });
    } catch(error) {
        await axios.post(global.logs, {
            content: "@everyone peto todoo\n\n" +error.stack
        });
        res.status(500).send("Ocurrió un error, este error ya fue informado.")
    }
});

router.get('/radio/stream', async (req, res) => {
    try {
        const response = await axios.get(global.url+"/listen.pls?sid=1", {
            responseType: 'stream'
        });

        res.setHeader('Content-Type', 'audio/mpeg');
        res.setHeader('Transfer-Encoding', 'chunked');

        response.data.pipe(res);
    } catch (error) {
        await axios.post(global.logs, {
            content: "@everyone peto todoo\n\n" +error.stack
        });
        res.status(500).send("Ocurrió un error, este error ya fue informado.")
    }
});

module.exports = router;

