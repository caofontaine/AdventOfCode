const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if(err) {
    console.log('Error processing file');
  }
  else {
    const routes = data.toString('utf8').split('');
    const santaRoutes = routes.filter((direction, index) => index % 2 === 0); // Santa takes all even paths.
    const roboSantaRoutes = routes.filter((direction, index) => index % 2 === 1); // Robo Santa takes all odd paths.

    const path = (routes) => {
      let houses = ['0x0'];
      let coordinates = {x: 0, y: 0};

      routes.forEach(route => {
        if (route === '^') coordinates.y++;
        if (route === 'v') coordinates.y--;
        if (route === '>') coordinates.x++;
        if (route === '<') coordinates.x--;

        houses.push(`${coordinates.x}x${coordinates.y}`);
      });

      return houses;
    };

    // The combined house coordinates go into a set, to create a unique set of values to determine the number of houses.
    let numHouses = new Set(path(santaRoutes).concat(path(roboSantaRoutes))).size;

    console.log(numHouses);
  }
});
