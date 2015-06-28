define(["knockout", "text!./notfound.html"], function(ko, pageTemplate) {

  function NotFoundViewModel(route) {
    this.message = ko.observable("We cannot compute: " + encodeURIComponent(route.realUrl));
  }

  return { viewModel: NotFoundViewModel, template: pageTemplate };

});
