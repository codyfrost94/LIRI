var Twitter = require('twitter')
var Spotify = require("node-spotify-api")

var twitterKeys = new Twitter ({
  consumer_key: 'rI88qPAo8ro7k5G5u3Omo7Pcw',
  consumer_secret: 'X9KgFGdDUbrcrCYL94x3aPcyBKRLx4ijTOYsWQrOvcPuFMGhV6',
  access_token_key: '820940394-ZXinnM7M7b8k9dQNxcNBlwnPscEwF6IXygduZj4A',
  access_token_secret: 'COGwE5Cgd8OQTUGxFCDLsK4t7qQkFADxNNQxDOMGQckMo',
});

var spotifyKeys = new Spotify ({
  id: "8cf019e791a94900aaeb3b1f09650998",
  secret:"5e94128d7ef445109464262bc9b453d1"
});

module.exports = {
	twitter:twitterKeys,
	spotify:spotifyKeys
}