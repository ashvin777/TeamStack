(function(app) {

  var dir = 'src/pages/login/';
  var templateUrl = dir + "login.html";
  var styles = [ dir + "login.css"];

  app.Pages.Login =
    ng.core.Component({
      selector : "login",
      styleUrls : styles,
      templateUrl: templateUrl,
    })
    .Class({
      constructor: function() {
        this.title = "TeamStack"
      }
    });

})(window.app || (window.app = {}));
