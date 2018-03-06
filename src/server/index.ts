import * as express from 'express';
import * as socketIo from 'socket.io';
import '../db';

import authRouter from './routers/auth.router';

const app = express();

app.use('/auth', authRouter);

// start server listening
let server = app.listen(process.env.PORT || 3000);

// bind socket.io to server
server = socketIo(server);

export default server;
