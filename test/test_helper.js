const mongoose = require('mongoose');

//tell mocha to check for connnection once
before((done)=>{
	mongoose.connect('mongodb://localhost/users_test');
	mongoose.Promise = global.Promise;
	mongoose.connection
		.once('open', () => { done();})
		.on('error', (err) => {
			console.warn('Error', err)
		});
})

//clear the database before inserting new data
beforeEach((done)=>{
	mongoose.connection.collections.users.drop(()=>{
		done();
	});
})