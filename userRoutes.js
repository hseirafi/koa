

/**
 * Created by hass on 1/21/2017.
 */

const parse = require('co-body');
const monk = require('co-monk');
const wrap = require('monk');
const db= monk('localhost/usersApi');
const users = wrap(db.get('users'));
module.exports.users = users;

module.exports.add = function *() {

  let postedUser = yield parse(this);
  let insertedUser = yield users.insert(postedUser);
    this.set('location', '/user/' + insertedUser._id);
    this.status = 200;

};

module.exports.get = function * (id){

this.body = "you passed me:" +id;

};