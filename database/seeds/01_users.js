exports.seed = function (knex) {
	return knex('users')
		.truncate()
		.then(function () {
			return knex('users').insert([
				{
					username: 'john',
					password: 'password1',
					department: 'customer-service',
				},
				{ username: 'alice', password: 'password2', department: 'sales' },
				{ username: 'jane', password: 'password3', department: 'tech' },
			]);
		});
};
