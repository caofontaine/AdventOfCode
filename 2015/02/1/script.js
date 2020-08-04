const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if(err) {
    console.log('Error processing file');
  }
  else {
    let totalPaper = 0;

    // Returning truthy/falsey values with Boolean filter, getting rid of the newline at the end of input file.
    const presentSizes = data.toString('utf8').split('\n').filter(Boolean);

    presentSizes.map(present => {
      let sizeArray = present.split('x');
      let length = sizeArray[0],
          width = sizeArray[1],
          height = sizeArray[2];

      let slack = Math.min(length * width, width * height, height * length);

      totalPaper += (2 * ((length * width) + (width * height) + (length * height))) + slack;
    });

      console.log(totalPaper);
  }
});
