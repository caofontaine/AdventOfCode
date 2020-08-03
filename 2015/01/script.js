const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    console.time('funchallenge');
    if(err) {
        console.log('Error processing file');
    }
    else {
        // Part 1
        /*let upFloors = data.toString('utf8').split('').filter(char => char === '(').length;
        let downFloors = data.toString('utf8').split('').filter(char => char === ')').length;
        console.log(upFloors);
        console.log(downFloors);
        console.log('Santa is on floor ', (upFloors - downFloors));*/

        // Part 2 - Original answer
        // This method continues to go through the entire array, regardless of when Santa first hits the basement.
        /*let chars = data.toString('utf8').split('');
        let negPosition = 0;
        let santasFloor = 0;
        chars.forEach((ch, i) => {
            if (ch === '(') {
                santasFloor++;
            }
            else {
                santasFloor--;
            }
            if (santasFloor === -1) {
                negPosition = i+1;
                console.log(negPosition);
            }
        });
        console.log(`Santa hits the basement at position ${negPosition}`);*/

    		// Part 2 - Optimized answer
    		// With Array.some(), the use of a callback will allow the first occurance of Santa hitting the basement return and break the execution.
    		// No need to go through the entire array.
    		const dataArray = data.toString().split('');
    		let position = 0;
    		let currentFloor = 0;
    		dataArray.some(char => {
    			position++;
    			if (char === '(') {
    				currentFloor++;
    			}
    			else if (char === ')') {
    				currentFloor--;
    			}
    			return currentFloor < 0;
    		});

    		console.log(`Santa first hits the basement at position ${position}`);
    }
    console.timeEnd('funchallenge');
});
