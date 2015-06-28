define("app", ["jquery", "knockout", "router"], function($, ko, router){

    return {
        init: function() {
            console.info("app init start...");

            ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
            ko.components.register('home-page', { require: 'components/home-page/home' });
            ko.components.register('not-found-page', { require: 'components/not-found-page/notfound' });

            // ... or for template-only components, you can just point to a .html file directly:
            ko.components.register('about-page', {
                template: { require: 'text!components/about-page/about.html' }
            });

            ko.applyBindings({ route: router.currentRoute });

            console.info("app init end...");
        }
    }
});
