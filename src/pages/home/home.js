(function(app) {

  var dir = 'src/pages/home/';
  var templateUrl = dir + "home.html";
  var styles = [dir + "home.css"];
  var directives = [app.Components.Header, ng.router.RouterLink];

  app.Pages.Home = ng.core.Component({
      directives: directives,
      styleUrls: styles,
      templateUrl: templateUrl,
    })
    .Class({
      constructor: function() {
        this.title = "This is the home page";
      }
    });

})(window.app || (window.app = {}));
