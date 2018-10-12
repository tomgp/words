---
layout: interactive
title: Line simplification revisited
script: /words/assets/scripts/line-simplify-bundle.js
dataSource: /words/assets/data/bonds.csv
---
A few years back I knocked together a demo showing how to reduce the complexity of a line whilst losing a minimum amount on information -- preserving peaks and troughs etc. This is useful for -- among other things -- reducing visual complexity and file size. I recently had need of the technique again so I tidied up the code and published it to [NPM](https://www.npmjs.com/package/@tomgp/line-simplification). 

Also, I'm testing out the idea of putting interactive bits and bobs into blog posts. If you're looking at this page in a web browser I hope that you'll be able to see a demo of the line simplifier at the top of the page (the [code for which can be found on GitHub](https://github.com/tomgp/simplify-line/blob/master/examples/index.js)).