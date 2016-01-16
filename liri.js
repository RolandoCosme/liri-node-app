var keys = require("./keys.js");

var params = process.argv.slice(3);

switch(process.argv[2]) {
  case "my-tweets":
    result = tweets(params);
    break;

  case "spotify-this-song":
    result = subtract.doIt(params);
    break;

  case "move-this":
    result = subtract.doIt(params);
    break;

  case "do-what-is-says":
    result = subtract.doIt(params);
    break;

}
console.log(result);