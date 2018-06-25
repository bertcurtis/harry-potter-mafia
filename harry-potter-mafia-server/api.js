// api.js

const pusher = new Pusher({
    appId: '549094',
    key: '5cdc55156e6e6ab302a5',
    secret: 'b40a7d9ef398533606df',
  });

const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

router.get('/', (req, res) => {
  res.send('all good');
});

router.post('/pusher/auth', (req, res) => {
    console.log('POST to /pusher/auth');
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
  });

module.exports = router;