reply.js
========

node.js' version of [Haskell's "interact" function](http://hackage.haskell.org/packages/archive/base/latest/doc/html/Prelude.html#v:interact).

It is useful to quickly write small JavaScript programs that process input from stdin and write output to stdout:

```
// capitalize.js

require('./reply')(function (input) {
    return input.toUpperCase();
});
```

The above program capitalizes text fed to it via stdin. So, consider you have a file called *captain* with the following content:

```
I
am
the
freaking
captain!!!!!
```

Then its contents can be easily capitalized with our silly program as such:

```
guidjos@gdjs:~/Desktop/reply.js> cat captain | node capitalize.js
I
AM
THE
FREAKING
CAPTAIN!!!!!
guidjos@gdjs:~/Desktop/reply.js> 
```
