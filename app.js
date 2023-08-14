const fs = require('fs');
const _ = require('lodash');

// const wordsCount = require('words-count');
// const { default: wordsCount } = require('words-count');
function amit(){
    fs.readFile('text.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        // console.log(data);
        const arr = data.split(' ');
        console.log(arr.length);
        const rev = _.reverse(arr);
        console.log(rev.join(' '));
        const uni = _.uniq(arr);
        console.log(uni.join(' '));
        console.log(uni.length);
        console.log(uni.join(' ').toUpperCase());
        let big5 = '';
        for (const iterator of uni) {
            // console.log(uni);
            if (iterator.length >= 5) big5 += iterator + ' ';
        }
        console.log(big5);
        const vowels = []
        for (const iterator of uni) {
            let i = 0;
            // console.log(iterator);
            for (const words of iterator) {
                if('IOAEU'.includes(words.toUpperCase()))i++
            }
            let a = `{word: ${iterator},vowelCount: ${i}}\n`
            vowels.push(a);
        }
        console.log(vowels);
        const resulte = [uni.join(' ').toUpperCase(),'\n\n',big5,'\n\n',[vowels]]
        fs.writeFile('resuolt.txt',`${resulte}`,(err)=>{
            if(err)throw err;
            console.log('yes');
        })
    
        
    
    })
}
module.exports = amit

