const express = require('express');
const axios = require('axios');
const router = express.Router();

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

module.exports = router;