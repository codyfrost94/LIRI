var keys = require('./keys.js');
var request = require('request');
var input = process.argv[2];
var songOrMovie = process.argv[3];

if (input === "my-tweets") {
    keys.twitter.get("statuses/user_timeline", function(error, tweets, response) {
        if (error) { throw error };

        for (i = 0; i < tweets.length; i++) {
            console.log("Tweet " + (parseInt([i]) + 1) + ": " + tweets[i].text + "\n" + "Created At: " + tweets[i].created_at)
        }


    })
} else if (input === "spotify-this-song") {
    if (songOrMovie) {
        keys.spotify.search({ type: 'track', query: songOrMovie }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            console.log(data.tracks.items[0].artists[0].name);
            console.log(data.tracks.items[0].name);
            console.log(data.tracks.items[0].external_urls.spotify);
            console.log(data.tracks.items[0].album.name)
        });

    } else {
        keys.spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }


            console.log(data.tracks.items[8].artists[0].name);
            console.log(data.tracks.items[8].name);
            console.log(data.tracks.items[8].external_urls.spotify);
            console.log(data.tracks.items[8].album.name)
        });
    }

} else if (input === "movie-this") {
    if (songOrMovie) {
        request('http://www.omdbapi.com/?apikey=40e9cece&t=' + songOrMovie, function(error, response, body) {
            if (error) {
                return console.log('Error occurred: ' + error);
            }
            
           //for some reason if I try to pull information from response.body.Title or anything else like that its always undefined.
            console.log(response.body);
        });
    }

    else {
    	request('http://www.omdbapi.com/?apikey=40e9cece&t=Mr+Nobody', function(error, response, body) {
            if (error) {
                return console.log('Error occurred: ' + error);
            }
            
           //for some reason if I try to pull information from response.body.Title or anything else like that its always undefined.
            console.log(response.body);
        });
    }

} else if (input === "do-what-it-says") {

} else {
    console.log("That's not a command!")
}