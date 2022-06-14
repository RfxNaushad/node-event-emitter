const EventEmitter = require('events');


class School extends EventEmitter {

    startPeriod() {
        console.log('class started');

        // raise event when bell ring 
        // raise and event 
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'First',
                text: 'period ended',
            });
        }, 2000)
    }
}

module.exports = School;