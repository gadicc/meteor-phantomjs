## phantomjs ##

**All this package does is install phantomjs for you and make
sure it's in your nodejs PATH**.  It is not a wrapper for
using phantomjs directly, and the most common use is to ensure
phantomjs is installed and useable by the `spiderable` package.

This is a tiny wrapper for the
[node phantomjs module](https://github.com/Obvious/phantomjs).
You could also just add that node module directly, but the
advantages of the smart package are:

1. Uses a modified version of the node module with support for
Sun (e.g. SmartOS) binary 
1. Updates your apps PATH to include the phantomjs dir, so 
that scripts like spiderable will work.

## What if I want to use phantomjs directly?

I'd recommend using an NPM wrapper like
[https://www.npmjs.org/package/phantomjs-wrapper phantomjs-wrapper]
or
[https://www.npmjs.org/package/webshot webshot].

Alternatively, Ben Green has graciously provided the
following example of how to use the phantomjs binary directly:

**server/server.js:**

```js
var phantomjs = Npm.require('phantomjs');
var spawn = Npm.require('child_process').spawn;
Meteor.methods({
  runTest: function(options){
    command = spawn(phantomjs.path, ['assets/app/phantomDriver.js']);
    command.stdout.on('data',  function (data) {
      console.log('stdout: ' + data);
    });
    command.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });
    command.on('exit', function (code) {
      console.log('child process exited with code ' + code);
    });
  }
});
```

**private/phantomDriver.js:**

```js
var page = require('webpage').create();
page.open('http://github.com/', function() {
    console.log('Page Loaded');
    page.render('github.png');
    phantom.exit();
});
```

## Credits ##

This smart package basically just assists in making the changes suggested in this 
[Modulus blog post](http://blog.modulus.io/running-phantomjs-on-modulus).  Thanks,
guys, for another great contribution to Meteor!