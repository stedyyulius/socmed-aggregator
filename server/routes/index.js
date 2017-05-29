var express = require('express');
var router = express.Router();
var oauth = require('../Controllers/controller-twatt.js')


router.post('/search',oauth.searchStory)

router.get('/',function(req,res,next){
  res.send('halo')
})

router.get('/timeline', oauth.timeline)

module.exports = router;
