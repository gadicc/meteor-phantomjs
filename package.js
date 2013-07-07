Package.describe({
    summary: "phantomjs installation script; wrapper for node phantomjs package + Sun"
});

Npm.depends({
	'phantomjs-sun': '1.9.1-1'
});

// even though we're serving minified, dynamic loading would be nice
Package.on_use(function (api) {
	api.add_files('phantom.js', 'server');
});
