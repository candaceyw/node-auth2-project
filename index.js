const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const cookieParser = require('cookie-parser');
const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
server.use(helmet());
server.use(express.json());
server.use(cookieParser());

server.use(
	session({
		secret: 'secret token',
		resave: false,
		saveUninitialized: true,
		unset: 'destroy',
		name: 'session cookie name',
		genid: (req) => {
			// Returns a random string to be used as a session ID
		},
	})
);

server.use('/auth', authRouter);
server.use('/users', usersRouter);

server.get('/', (req, res, next) => {
	res.json({
		message: 'Welcome to our API',
	});
});

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong',
	});
});

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});
