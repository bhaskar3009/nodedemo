const {readFile, writeFile} = require('fs')
console.log('start');
readFile('./mainfolder/subfolder/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
    }

    const f =result;

    readFile('./mainfolder/subfolder/sec.txt','utf8', (err, result)=>{
        if(err){
            console.log(err)
        }
        const s =result;

        writeFile(
            './mainfolder/subfolder/asyncoutput.txt',
            `here is the result of prev. console: ${f}, ${s}`,
            (err, result)=>{
                if(err){
                    console.log(err)
                }
                console.log('done with this task');
            }
        )
    })

});
console.log('starting with the new task.');