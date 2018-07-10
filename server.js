// import https from 'https';
// https.get('https://www.lynda.com', res => {
//     console.log('Respose status code: ', res.statusCode);

//   /*  res.on('data', chunk => {
//         console.log(chunk.toString());
//     });*/

// });


// import http from 'http';

// const server = http.createServer();
// server.listen(8082);

// server.on('request', (req, res) =>{
//     res.write('Hello HTTP! \n');
//     setTimeout(() => {
//         res.write('I can stream later!\n');
//         res.end();
//     },3000);

// });

import config from './config';

import apiRouter from './api';

import express from 'express';
const server = express();

server.get('/',(req, res) =>{
res.send('Hello from Express \n');
});

server.use('/api', apiRouter);


server.use(express.static('public'));

// server.get('/about.html',(req, res) =>{
//         res.send('The about page \n');
//         });

server.listen (config.port, () => {
    console.info('Express listening on port', config.port);
});