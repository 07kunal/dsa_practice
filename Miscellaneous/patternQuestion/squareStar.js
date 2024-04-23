let row = 4;
let column = 4;

// nested loop

const genPatternFunc = (r, c) => {

    for (let i = 1; i <= r; i++) {
        let line = '';


        for (let j = r; j >= 1; j--) {
            line += '* '


        }
        console.log(i + ' ' + line);


    }

}

genPatternFunc(row, column);