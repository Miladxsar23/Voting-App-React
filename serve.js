const {middleware} = require('./disable-browser-cache');
const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((req, res) => {
    middleware(req, res);
    handler(req, res, {
        public : "./public"
    });
})

server.listen(3000, () => {
    console.log('server run at : http://localhost:3000');
})