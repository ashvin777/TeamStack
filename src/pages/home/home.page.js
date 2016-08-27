(function(app) {

  var dir = 'src/pages/home/';
  var templateUrl = dir + "home.html";
  var styles = [ dir + "home.css"];

  app.HomePage =
    ng.core.Component({
      directives: [ app.HeaderComponent ],
      styleUrls : styles,
      templateUrl: templateUrl,
    })
    .Class({
      constructor: function() {
        this.title = "This is the home page"
      }
    });

})(window.app || (window.app = {}));
