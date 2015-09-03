var App = {
  Models: {},
  View: {},
  Collections: {},
  Routers: {}
}

$(document).ready(function(){
  App.Routers.itemsRouter = new App.Routers.Items();
});
