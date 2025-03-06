//  Global - No Window !!! -> on the word quickly

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// console.log("log", __dirname);
// setInterval(() => {
//   console.log("Hello World");
// }, 1000);

// to use export 
const names = require('./4-names');
const sayHi = require('./5-ultils');
// console.log(names);

const data = require('./6-alternative-flavor');
console.log(data);

// sayHi('Susan');
// sayHi(names.john);
// sayHi(names.peter);

require('./7-mind-grenerate');