console.log("Node");

const fs = require('fs') // file system module

// Creating a new File
fs.writeFileSync('./explain/notes.txt', 'This is my first file')

// Data Overwrite if File is Present
fs.writeFileSync('./explain/notes.txt', 'Data Overwrite if File is Present ')

// Appending Data to File
fs.appendFileSync('./explain/notes.txt', 'Appending Data to File ')
fs.appendFileSync('./explain/notes.txt', 'Testing node.js');

//Node. js includes an additional data type called Buffer
//(not available in browser's JavaScript).
// while reading from a file or receiving packets over the network.
//Buffer is mainly used to store binary data,

const buf_data = fs.readFileSync("./explain/notes.txt");
const org_data = buf_data.toString();
console.log(org_data);

// Rename File
fs.renameSync('./explain/testNotes.txt', './explain/notes.txt');