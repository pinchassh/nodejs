const fs = require('fs');
const { log } = require('util');
function amit() {
    fs.readFile('text.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        const arr = data.split(' ')
        let reverse = ''
        for (let i = 1; i < arr.length + 1; i++) {
            const element = arr[arr.length - i];
            reverse += element + ' ';
        }
        console.log(reverse);
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if(arr[i] === arr[j] && i !== j) arr.pop(i)  
            }
        }
        console.log(arr.join(' '));
    })
}
amit()