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

// node server create and start 
// // dependencies
// const http = require('http');

// // app object - module scaffolding
// const app = {};

// // configuration
// app.config = {
//     port: 3001
// };

// // create server
// app.createServer = () => {
//     const server = http.createServer(app.handleReqRes);
//     server.listen(app.config.port, () => {
//         console.log(`listen to the server ${app.config.port}`);
//     });
// };

// // handle req res
// app.handleReqRes = (req, res) => {
//     res.end('Hello Port');
// }

// // start the server
// app.createServer()
