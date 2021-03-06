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

---

<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">reply.js</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Guilherme Nami</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/guipn/reply.js" rel="dct:source">https://github.com/guipn/reply.js</a>.
