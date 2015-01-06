var Version = require("node-version-assets");
var versionInstance = new Version({
    assets: ['static/css/style.css', 'static/js/main.js'],
    grepFiles: ['views/react.jade', 'views/base.jade']
});
versionInstance.run();