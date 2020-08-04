const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if(err) {
    console.log('Error processing file');
  }
  else {
    const routes = data.toString('utf8').split('');

    // Create a set to store all house coordinates, which will be unique.
    let numHouses = new Set().add('0x0');

    routes.reduce((currentLocation, direction) => {
      let newHouse = {x: 0, y: 0};

      switch (direction) {
        case '^':
          newHouse = {x: currentLocation.x, y: currentLocation.y + 1};
          break;
        case 'v':
          newHouse = {x: currentLocation.x, y: currentLocation.y - 1};
          break;
        case '>':
          newHouse = {x: currentLocation.x + 1, y: currentLocation.y};
          break;
        case '<':
          newHouse = {x: currentLocation.x - 1, y: currentLocation.y};
          break;
        default:
          break;
      }

      numHouses.add(`${newHouse.x}x${newHouse.y}`);
      return newHouse; // Ensure in next iteration we have the new current location.
    }, {x: 0, y: 0});

    console.log(numHouses.size);
  }
});
