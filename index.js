// // // console.log(global)
// // setTimeout(() => {
// //     console.log('test')
// // }, 5000);

// const path = require('path')
// const os = require('os')
// const fs = require('fs')

// const myPath = 'D:/download data/pdf';

// console.log(path.basename(myPath))
// console.log(path.dirname(myPath))
// console.log(path.parse(myPath))

// console.log(os.platform()) 
// console.log(os.homedir()) 
// console.log(os.freemem()) 
// console.log(os.cpus())

// // file create write 
// fs.writeFileSync('myfile.txt', 'Hello Programmers');
// fs.appendFileSync('myfile.txt', ' How are you?'); 

// // sync way te kaaj korbe 
// const data = fs.readFileSync('myfile.txt');
// console.log(data) // will print buffer data type
// console.log(data.toString());

// // async way 
// const data2 = fs.readFile('myfile.txt', (err, data) => {
//     console.log(data.toString())
// });

// console.log("hello");

//Event*************

// const EventEmitter = require('events');

// const emitter = new EventEmitter();


//  register a listen for a bell ring 

 
// // raise and event 
// setTimeout(() => {
//     emitter.emit('bellRing', {
//         period: 'First',
//         text: 'period ended',
//     });
// }, 2000)



// final emit with class, instance
// const School = require('./school');

// const school = new School()

// school.on('bellRing', ({period, text}) =>{
//     console.log(`We need to run because ${period} ${text}`);
// });

// school.startPeriod();

