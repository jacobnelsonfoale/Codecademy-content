let satellite = 'The Moon';

let galaxy = 'The Milky Way';

let stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

/* Explination from Codecademy

Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.

You’ll notice that the function block for callMyNightSky() is able to access the global variables freely since 
the variables are available to all lines of code in the file.

*/