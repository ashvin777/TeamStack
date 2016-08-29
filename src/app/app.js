(function(app) {

  window.app = app = {
    Modules: {},
    Components: {},
    Pages: {},
    Directives: {},
    Pipes: {},
    Services: {},
    Storage: {},
    Config: {}
  };

  app.Config.init = function() {

    app.Modules.RouterModule =
      ng.router.RouterModule.forRoot([{
        path: '',
        component: app.Pages.Login,
        pathMatch: 'full'
      }, {
        path: 'home',
        component: app.Pages.Home
      }], {
        useHash: true
      });

    app.Components.AppComponent = ng.core.Component({
        selector: "app",
        directives: [ng.router.RouterOutlet, ng.router.RouterLink],
        template: "<router-outlet></router-outlet>"
      })
      .Class({
        constructor: function() {}
      });

    app.Modules.AppModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule, app.Modules.RouterModule],
        declarations: [app.Components.AppComponent, app.Components.Header, app.Components.GoogleLogin, app.Pages.Home, app.Pages.Login],
        bootstrap: [app.Components.AppComponent]
      })
      .Class({
        constructor: function() {}
      });

    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.Modules.AppModule);
  }

  document.addEventListener('DOMContentLoaded', app.Config.init);

})(window.app || (window.app = {}));
