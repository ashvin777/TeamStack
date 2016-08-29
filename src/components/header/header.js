(function(app) {

  var dir = 'src/components/header/';
  var templateUrl = dir + "header.html";
  var styles = [ dir + "header.css"];

  app.Components.Header =
    ng.core.Component({
      selector: 'header',
      styleUrls : styles,
      templateUrl: templateUrl,
    })
    .Class({
      constructor: function() {
        this.title = "TeamStack"
      }
    });

})(window.app || (window.app = {}));
