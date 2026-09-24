const app = require('./app');
const env = require('./config/env');

const server = app.listen(env.port, () => {
	console.log(`Kasi Kitchen running at http://localhost:${env.port}/`);
});

server.once('error', error => {
	if (error.code === 'EADDRINUSE') {
		console.error(`Port ${env.port} is already in use. The API may already be running at http://localhost:${env.port}/.`);
		return;
	}
	throw error;
});

const shutdown = () => {
	server.close(() => process.exit(0));
};

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);