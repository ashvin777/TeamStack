(function(app) {

  app.AppComponent =
    ng.core.Component({
      selector: "app",
      directives: [ng.router.RouterLink]
    })
    .Class({
      constructor: function(router) {
        console.log(router);
      }
    })

  app.AppModule =
    ng.core.NgModule({
      imports: [ng.platformBrowser.BrowserModule],
      declarations: [app.AppComponent],
      bootstrap: [app.AppComponent]
    })
    .Class({
      constructor: function() {}
    });

  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });

})(window.app || (window.app = {}));
