const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const router = require('./router');
const app = express();




const server = http.createServer(app);
const io = socketio(server);


const PORT = process.env.PORT || 5000;
app.use(router);


server.listen(PORT, () =>{
    console.log(`Server is running at Port ${PORT}`);
});

io.on('connection', (socket) =>{
    console.log('Connection established');
    socket.on('disonnect', () =>{
        console.log("User just left the room")
    });
});
