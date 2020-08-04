const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if(err) {
    console.log('Error processing file');
  }
  else {
    let totalRibbon = 0;

    // Returning truthy/falsey values with Boolean filter, getting rid of the newline at the end of input file.
    const presentSizes = data.toString('utf8').split('\n').filter(Boolean);

    presentSizes.map(present => {
      let sizeArray = present.split('x').sort((a,b) => a - b);

      let cubedFeet = sizeArray[0] * sizeArray[1] * sizeArray[2];

      totalRibbon += cubedFeet + (2 * sizeArray[0]) + (2 * sizeArray[1]);
    });
    console.log(totalRibbon);
  }
});
