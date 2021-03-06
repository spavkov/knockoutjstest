require.config({
   baseUrl: "js",
   paths: {
       jquery: "dependencies/jquery-2.1.1.min",
       "knockout" : "dependencies/knockout-3.3.0.debug",
       text:    "dependencies/text",
       crossroads: "dependencies/crossroads",
       hasher: "dependencies/hasher",
       signals: "dependencies/signals",
       router: "router"
   }
});

require(["app"], function (app){
   app.init();
});
