import locations from './store/locations.js';

locations.init().then(res => {
  console.log(res);
  console.log(locations);
  console.log(locations.getCitiesByCountryCode('PE'));
})

