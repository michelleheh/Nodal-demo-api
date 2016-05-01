module.exports = (() => {

  'use strict';

  const Nodal = require('nodal');

  class TestTweetTest extends Nodal.mocha.Test {

    test(expect) {

      it('Should do something', done => {

        expect(null).to.not.exist;
        done();

      });

    }

  }

  return TestTweetTest;

})();
