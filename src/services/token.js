(function(app) {

  app.Services.Token = ng.core.Class({
    constructor: function() {

    },
    getAccessToken: function() {
      return new Promise(function(resolve, reject){
        resolve(50);
      });
    }
  })

})(window.app || (window.app = {}))
