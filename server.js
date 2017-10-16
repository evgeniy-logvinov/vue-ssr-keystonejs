const chalk = require('chalk');
const forever = require('forever-monitor');
const path = require('path');

const mongo = require('./config/keystone.config').mongo;
const serverDirectory = path.resolve(__dirname, './server');
let server = {};

process.stdin.resume();

server = new (forever.Monitor)(path.join(serverDirectory, 'index.js'), {
  max: 1,
  args: ['--color'],
  watch: true,
  watchIgnoreDotFiles: true,
  watchDirectory: serverDirectory
});

server.on('start', function() {
  console.log('Forever started for first time.');
});

server.on('exit', function() {
  console.error('Index.js file has exited after '+server.max+' restarts');
});

//Exit handler.
function exitHandler(options, err) {
  try{
      //Killing node process manually that is running "Index.js" file.
      process.kill(server.childData.pid);
      console.log("Child process killed succesfully!!");
      console.log("Forever exit!!");
  }
  catch(err){
      console.log("Child process already stopped!!");
      console.log("Forever exit!!");
  }

  //Killing forever process.
  process.exit();
}

//Handling user exit events like Ctrl+C.
process.on('SIGINT', exitHandler.bind(null, {exit: true}));    

//Start server
console.log('Server start')
server.start();