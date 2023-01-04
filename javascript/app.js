const WebSocketServer = require('ws');
const path = require('path');
const express = require('express');
const app = express();
// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 8080 });
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/chat', express.static(path.join(__dirname, 'chat')))
// Creating connection using websocket
wss.eventNames("")
wss.on("connection", ws => {
    console.log("new client connected");
    // sending message
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`);
        ws.send(`Client has sent us: ${data}`)
    });
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    ws.on("delete", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});
app.get('/', (req, res) => {
    res.sendFile('index.html');
})
// app.all()
app.listen(9999,()=>{})
console.log("The WebSocket server is running on port 8080");