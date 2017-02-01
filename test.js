/**
 * Created by hass on 1/21/2017.
 */
var cd = require('co');
var users = require('./index.js');
var request = reqiure('supertest').agent(app.listen());

describe('Simple Use Api', function () {
    const test_user = {name:'James Bond', City:'HongKong, China'};

    it('creates a new user', function(done){

        request
            .post('/user')
            .send(test_user)
            .expect('location', /^\/user\/[0-9a-fA-F]{24}$/)
            .expect(200 , done);
});
});


