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
      directives : directives,
    })
    .Class({
      constructor: function(TokenService) {
        this.title = "TeamStack";
        this.TokenService = TokenService;
      },
      load : function(){
        this.TokenService.getAccessToken().then(function(){
          console.log("token Services succeed");
        })
      }
    });

  app.Pages.Login.parameters = [app.Services.Token]

})(window.app || (window.app = {}));
