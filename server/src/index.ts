// Import the required modules
import express from "express";
import http from "http";
import Server from "socket.io";

// Create a new instance of the Express app
const app = express();

// Create a new HTTP server using the Express app
const server = http.createServer(app);

// Create a new instance of Socket.io and attach it to the server
const io = new Server(server);

// Set up a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  io.emit("message", "Test");
});
server.listen(3000, () => {
  console.log('Connected at 3000');
});