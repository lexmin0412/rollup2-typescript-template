# rollup2 + typescript 项目模板

[![Greenkeeper badge](https://badges.greenkeeper.io/rollup/rollup-starter-lib.svg)](https://greenkeeper.io/)

> 此项目基于 [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) 扩展。

此仓库包含了使用 Rollup 创建一个库的简单示例，包括从 `node_modules` 中导入模块并将其从 CommonJS 转换为 ES Module.

我们将会创建一个名为 `how-long-till-lunch` 的库，这里使用了 [ms](https://github.com/zeit/ms) 这个包，它可以我们告诉我们距离下一次午餐还有多久。

```js
console.log('距离下一顿午饭还有 ' + howLongTillLunch());
```

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/rollup/rollup-starter-lib
cd rollup-starter-lib
npm install
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/how-long-till-lunch.cjs.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/how-long-till-lunch.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/how-long-till-lunch.umd.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

`npm test` builds the library, then tests it.

## Variations

* [babel](https://github.com/rollup/rollup-starter-lib/tree/babel) — illustrates writing the source code in ES2015 and transpiling it for older environments with [Babel](https://babeljs.io/)
* [buble](https://github.com/rollup/rollup-starter-lib/tree/buble) — similar, but using [Bublé](https://buble.surge.sh/) which is a faster alternative with less configuration
* [TypeScript](https://github.com/rollup/rollup-starter-lib/tree/typescript) — uses [TypeScript](https://www.typescriptlang.org/) for type-safe code and transpiling



## License

[MIT](LICENSE).
