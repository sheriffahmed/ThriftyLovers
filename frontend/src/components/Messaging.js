import React from 'react'

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3100');

let form = document.querySelector('form')

function chatMessage(msg) {

    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('chat message', 1000);
  }

//   $(function () {
//     var socket = io();
//     $('form').submit(function(){
//       socket.emit('chat message', $('#m').val());
//       $('#m').val('');
//       return false;
//     });
//     socket.on('chat message', function(msg){
//       $('#messages').append($('<li>').text(msg));
//       window.scrollTo(0, document.body.scrollHeight);
//     });
//   });