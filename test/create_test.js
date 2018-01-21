const assert = require('assert');
const User = require('../src/user');


describe('creating Record', () => {
    it('save user', (done) => {
        const joe = new User({
            name: 'Joe'
        });

        joe.save()
            .then(() => {
                assert(!joe.isNew);
                done();
            })
    });
});