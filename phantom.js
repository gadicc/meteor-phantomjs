var phantomjs = Npm.require('phantomjs-sun'), path = Npm.require('path');
process.env.PATH += ':' + path.dirname(phantomjs.path);
