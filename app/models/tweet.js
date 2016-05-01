module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js'); // import User model for joining, notice sets the the base directory to demo-api

  class Tweet extends Nodal.Model {}

  Tweet.setDatabase(Nodal.require('db/main.js'));
  Tweet.setSchema(Nodal.my.Schema.models.Tweet);

  Tweet.joinsTo(User, {multiple: true}); // join table

  return Tweet;

})();
