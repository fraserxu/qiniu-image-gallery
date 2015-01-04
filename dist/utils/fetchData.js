"use strict";

var runAuto = require("run-auto");

var env = require("./env");

function fetchData(routes, params, cb) {
  if (env.CLIENT && typeof window.__PROPS__ != "undefined") {
    var props = window.__PROPS__;
    delete window.__PROPS__;
    return cb(null, props);
  }

  var fetchDataRoutes = routes.filter(function (route) {
    return route.handler.fetchData;
  });
  if (fetchDataRoutes.length === 0) {
    return cb(null, {});
  }

  var dataFetchers = {};
  fetchDataRoutes.forEach(function (route) {
    var fetcher = route.handler.fetchData;
    if (fetcher.length == 2) {
      fetcher = fetcher.bind(null, params);
    }
    dataFetchers[route.name] = fetcher;
  });

  runAuto(dataFetchers, function (err, data) {
    cb(err, { data: data });
  });
}

module.exports = fetchData;