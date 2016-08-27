(function(app) {

  app.AppComponent = ng.core.Component({
      selector: "app",
      directives: [ng.router.RouterOutlet, ng.router.RouterLink],
      template: "<router-outlet></router-outlet>"
    })
    .Class({
      constructor: function() {}
    });

  var routes = [{
    path: '',
    component: app.HomePage
  }];

  var routing = ng.router.RouterModule.forRoot(routes);

  app.AppModule = ng.core.NgModule({
      imports: [ng.platformBrowser.BrowserModule, routing],
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
