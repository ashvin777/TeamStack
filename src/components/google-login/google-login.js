(function(app) {

  var dir = 'src/components/google-login/';
  var templateUrl = dir + "google-login.html";
  var styles = [dir + "google-login.css"];
  var directives = [ng.router.RouterLink];

  app.Components.GoogleLogin = ng.core.Component({
      selector: 'google-login',
      directives: directives,
      styleUrls: styles,
      templateUrl: templateUrl,
    })
    .Class({
      constructor: function() {
        this.title = "This is the login page";
      }
    });

})(window.app || (window.app = {}));
