const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, { debug: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use('/peer', peerServer);

server.listen(3000, () => {
    console.log("Running at http://localhost:3000")
})



