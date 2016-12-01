## **ES6-tut**
Learning about ES6/2015, the latest update for Javascript...

##### To install:
- Serverside
  - run `npm install -g babel-core`
  - add `require('babel-core)` to the index.js(already added in tut)
- Clientside
  - run `npm install --save-dev babelify`
  - add to package.json `{
  "transform": [["babelify", { "comments": false }]]
}`

- [Website](https://www.ecma-international.org/publications/standards/Ecma-262.htm)
- [BABEL](https://babeljs.io/)
- [Video1](https://www.youtube.com/watch?v=CozSF5abcTA)
- [Video2](https://www.youtube.com/watch?v=LmL0Gh193M0)

To spin up a http server i am using [Budo](https://github.com/mattdesl/budo) but there are many other options out there such as [http-server](https://www.npmjs.com/package/http-server) and [Reload](https://www.npmjs.com/package/reload)

To make the tutorial work you need to install budo by typing `npm i -g budo` and then just `npm start`
