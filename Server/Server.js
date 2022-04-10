const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');
const port = new SerialPort('COM4', {baudRate: 115200,autoOpen: true});

const WebSocket = require('ws');
const server = new WebSocket.Server({port:'8080'});

console.log("dela");

let pod="";

server.on('connection',socket =>
{
  socket.on('message', podatki => {
    if(podatki.toString()=="podatki")
      socket.send(pod);
      console.log(pod);
  });
});



const parser = new ReadLine();
port.pipe(parser);


parser.on('data', function (podatki) {
  pod=podatki;
  console.log(pod);
});
