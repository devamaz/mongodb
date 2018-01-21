const assert = require('assert');
const User = require('../src/user');

describe('Deleting User for database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({
            name: 'joe'
        })
        joe.save()
            .then(() => done())
    })

    function assertName(operation, done) {
        operation
            .then(() => User.findOne({
                name: 'joe'
            }))
            .then((user) => {
                assert(user === null);
                done();
            }) 
    }

    it('model instance remove', (done) => {
        assertName(joe.remove(), done)       
    })

    it('class method remove', (done) => {
        assertName(User.remove({name: 'joe'}), done)       
    })

    it('class method findOneAndRemove', (done) => {
        assertName(User.findOneAndRemove({ name: 'joe'}), done) 
    })

    it('class method findByIdAndRemove', (done) => {
        assertName(User.findByIdAndRemove(joe._id), done)        
    })

})