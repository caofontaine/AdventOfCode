const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if(err) {
    console.log('Error processing file');
  }
  else {
    const input = data.toString('utf8').split('\n').filter(Boolean);

    // Parse command from string and return object
    const parseCommand = cmd => {
      let command = cmd.match(/(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/);
      return {command: command[1], x1: +command[2], y1: +command[3], x2: +command[4], y2: +command[5]};
    };

    // Initialize our light grid to be default to off (0).
    let lightGrid= new Uint8Array(1000 * 1000);

    // Gather the commands and coordinates to turn lights on/off.
    input.forEach(cmd => {
      let command = parseCommand(cmd);

      for (let x = command.x1; x <= command.x2; x++) {
        for (let y = command.y1; y <= command.y2; y++) {
          let index = 1000 * x + y;

          if (command.command === 'turn on') lightGrid[index] = 1;
          if (command.command === 'turn off') lightGrid[index] = 0;
          if (command.command === 'toggle') lightGrid[index] = lightGrid[index] === 0 ? 1 : 0;
        }
      }
    });

    // Determine the number of lit lights.
    const result = lightGrid.reduce((total, light) => light === 0 ? total : ++total, 0);

    console.log(result);
  }
});
