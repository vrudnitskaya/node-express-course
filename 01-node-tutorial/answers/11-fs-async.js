const { readFile, writeFile } = require('fs')

console.log('at start');

readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    
    readFile('../content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        
        writeFile('./temporary/fileB.txt', `Line 1: ${first}\n`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Line 1 was added');
            
            writeFile('./temporary/fileB.txt', `Line 2: ${second}\n`, { flag: 'a' }, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Line 2 was added');
                
                writeFile('./temporary/fileB.txt', 'Line 3: the end\n', { flag: 'a' }, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Line 3 was added');
                    console.log('All lines were added');
                });
            });
        });
    });
});

console.log('at end');