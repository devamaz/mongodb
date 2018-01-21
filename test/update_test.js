const assert = require('assert');
const User = require('../src/user');

describe('Updating User for database', () => {
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
            .then(()=> User.find({}))
            .then((users)=>{
                assert(users.length === 1);
                assert(users[0].name === 'jane');
                done(); 
            });  
    }

    it('model instance using set n save', (done) => {
        joe.set({name:'jane'})
        assertName(joe.save(), done)
    })
    
    it('model instance can update', (done)=>{
        assertName(joe.update({name:'jane'}), done)
    })

    it('model class can update', (done)=>{
        assertName(User.update({name:'joe'}, {name:'jane'}), done)
    })
    it('model class can findOnrAndUpdate', (done)=>{
        assertName(User.findOneAndUpdate({name: 'joe'}, {name:'jane'}), done)
        
    })
    it('model class can findByIdAndUpdate', (done)=>{
        assertName(User.findByIdAndUpdate(joe._id, {name:'jane'}), done)
    })
   

})