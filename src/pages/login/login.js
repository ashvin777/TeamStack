(function(app) {

  var dir = 'src/pages/login/';
  var templateUrl = dir + "login.html";
  var styles = [ dir + "login.css"];
  var directives = [app.Components.GoogleLogin];

  app.Pages.Login =
    ng.core.Component({
      selector : "login",
      styleUrls : styles,
      templateUrl: templateUrl,
      directives : directives
    })
    .Class({
      constructor: function() {
        this.title = "TeamStack"
      }
    });

})(window.app || (window.app = {}));
