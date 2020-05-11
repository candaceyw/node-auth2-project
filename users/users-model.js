const bcrypt = require('bcryptjs');
const db = require('../database/config');

async function add() {
	// hash the password with a time complexity of 14
	user.password = await bcrypt.hash(user.password, 14);

	const [id] = await db('users').insert(user);
	return findById(id);
}

function find(dept) {
	return db('users').select('id', 'username', 'department');
}

function findBy(filter) {
	return db('users')
		.select('id', 'username', 'password', 'department')
		.where(filter);
}

function findById(id) {
	return db('users').select('id', 'username').where({ id }).first();
}

module.exports = {
	add,
	find,
	findBy,
	findById,
};
