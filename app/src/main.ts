import { app } from './app';
import * as http from 'http';

import * as mongoose from 'mongoose';


const PORT = process.env.PORT || 8080;
const MONGO_URI = 'mongodb+srv://node:DL2NH58JeBnCYNlT@projet.7l1dz.mongodb.net/node?retryWrites=true&w=majority';
const server = http.createServer(app);
server.listen(PORT);
server.on('listening', async () => {
	console.info(`Listening on port ${PORT}`);
	mongoose.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false});
	mongoose.connection.on('open', () => {
		console.info('Connected to Mongo');
	});
	mongoose.connection.on('error', (err: any) => {
		console.error(err);
	});
});