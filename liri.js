debugger;
var Twitter = require('twitter');
var Keys = require("./keys.js");
var spotify = require('spotify');

switch(process.argv[2]) {
  case "my-tweets":
    getTweets();
    break;
  case "spotify-this-song":
    getSpotify();
    break;
  };


function getTweets(){
  var client = new Twitter({
    consumer_key: 'KqkB0kmAhHDQq7dnRX2rHtSla',
    consumer_secret: 'iOi3bKl35Gttm0LIfGkWbxovZ8KezZ5u1Kmjk9gvD4q9Ou9U3l',
    access_token_key: '171743975-ZhAn6RrPE9rqcxkjc9wmlsoUltySJfinonr3al7n',
    access_token_secret: 'eBqS3q5b1z7sP1gOUXHvdvXm183xE0Cw8mErvm1JbCT6K',
  });
   
  var params = {screen_name: 'RolandoCosme'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      for (var i = 0; i < 2; i++) {
        console.log(tweets[i].text);
        };
    }
    else {
      console.log(error);
    };
  });
};

function getSpotify(){
  spotify.search({ type: 'track', query: (process.argv[3]) }, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
        }
    else if (data) {
      console.log("Displaying the top 3 hits from your search")
      for (var i = 0; i < 3; i++) {
        console.log("Artist: " +data.tracks.items[i].artists[0].name);
        console.log("Song Name: " +data.tracks.items[i].name);
        console.log("Preview Link: "+data.tracks.items[i].href);
        console.log("Album Name: "+data.tracks.items[i].album.name);
        };
      };
    });
  };
