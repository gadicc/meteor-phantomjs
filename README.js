## phantomjs ##

This is a tiny wrapper for the
[node phantomjs module](https://github.com/Obvious/phantomjs).

You could also just add that node module directly, but the advantages of the
smart package are:

1. Uses a modified version of the node module with support for a Sun (e.g. SmartOS) binary
1. Updates your apps PATH to include the phantomjs dir, so that scripts like spiderable
will work.

## Credits ##

This smart package basically just assists in making the changes suggested in this 
[Modulus blog post](http://blog.modulus.io/running-phantomjs-on-modulus).  Thanks,
guys, for another great contribution to Meteor!