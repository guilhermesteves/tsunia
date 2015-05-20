/**
 * May the build success be with you.
 *
 * @module        :: Grunt
 * @name          :: Endpoints Example
 * @description   :: This is an example of how an endpoint file should be (rename this to endpoints.js)
 */

var endpoints =  {

  development : '\'http://\'+ window.location.hostname + window.location.port.replace(\'8786\',\'9000\') + \':/api\';',
  ratification : '\'http://example-ratification.com/api\';',
  production : '\'http://example-production.com/api\';'

};

module.exports = endpoints;
