define(["knockout", "crossroads", "hasher"], function(ko, crossroads, hasher) {

    // This module configures crossroads.js, a routing library. If you prefer, you
    // can use any other routing library (or none at all) as Knockout is designed to
    // compose cleanly with external libraries.
    //
    // You *don't* have to follow the pattern established here (each route entry
    // specifies a 'page', which is a Knockout component) - there's nothing built into
    // Knockout that requires or even knows about this technique. It's just one of
    // many possible ways of setting up client-side routes.

    return new Router({
        routes: [
            { url: '',          params: { page: 'home-page' } },
            { url: 'home',      params: { page: 'home-page' } },
            { url: 'about',     params: { page: 'about-page' } }
        ]
    });

    function Router(config) {
        var currentRoute = this.currentRoute = ko.observable({});

        ko.utils.arrayForEach(config.routes, function(route) {
            crossroads.addRoute(route.url, function(requestParams) {
                console.log('setting current route to: ' + route.url);
                currentRoute(ko.utils.extend(requestParams, route.params));
            });
        });

        crossroads.bypassed.add(function (url) {
            console.log("bypassed " + url);
            currentRoute(
                {
                    page: 'not-found-page',
                    realUrl: url
                });
        });

        activateCrossroads();
    }

    function activateCrossroads() {
        crossroads.routed.add(console.log, console);

        function parseHash(newHash, oldHash) {
            crossroads.parse(newHash);
        }
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    }
});