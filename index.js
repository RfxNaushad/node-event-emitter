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

 final emit with class, instance
const School = require('./school');

const school = new School()

 school.on('bellRing', ({period, text}) =>{
     console.log(`We need to run because ${period} ${text}`);
});

 school.startPeriod();

