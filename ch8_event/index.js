import event from 'events'

// creating an object.....
const eventEmitter = new event()

// register an event...
eventEmitter.on('click', () => console.log("user Clicked.."))

// emit an event
eventEmitter.emit("click")

// on allows to emit an event multiple times..
eventEmitter.emit("click")
eventEmitter.emit("click")


// to call only one time an event.. and once invoked remove it
eventEmitter.once("submit", () => console.log("Form Submitted..."))

// emit an event "submit"
eventEmitter.emit("submit")
eventEmitter.emit("submit")

