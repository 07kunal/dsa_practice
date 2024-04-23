let row = 4;
let column = 4;

// nested loop

const genPatternFunc = (r, c) => {

    for (let i = 1; i <= r; i++) {
        let line = '';


        for (let j = 1; j <= r; j++) {
            line += ` ${j}`


        }
        console.log(i + ' ' + line);


    }

}

genPatternFunc(row, column);