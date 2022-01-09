const {readFile,writeFile} = require('fs')

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(result)
// })
console.log('starting with a task')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result_async.txt',
        'Here is the results : ${first} , ${second}',(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('Done with this task')
        })
    })
})
console.log('Starting another task')