const assert = require('assert');
const User = require('../src/user');

describe('Getting User for database',()=>{
	let joe;

	beforeEach((done)=>{
		joe = new User({ name: 'joe'})
		joe.save()
			.then(()=>done())
	})

	it('Getting all users with name \'joe\'', (done)=>{
		User.find({ name: 'Joe'})
			.then((users)=>{
				console.log(users);
				done();
			})
	})
})
	
