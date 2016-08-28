(function(app) {
  app.Storage.User = ng.core.Class({
    constructor: function() {
      this.username = "";
      this.password = "";
    },
    getUsername: function() {
      return this.username;
    },
    getPassword: function() {
      return this.password;
    },
    setUsername: function(name) {
      this.username = name;
    },
    setPassword: function(pass) {
      this.password = pass;
    }
  })

})(window.app || (window.app = {}))
