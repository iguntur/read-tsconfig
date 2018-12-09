# read-tsconfig

[![Travis CI](https://img.shields.io/travis/iguntur/read-tsconfig.svg?style=flat-square)](https://travis-ci.org/iguntur/read-tsconfig)
[![node](https://img.shields.io/node/v/read-tsconfig.svg?style=flat-square)](#)
[![npm](https://img.shields.io/npm/v/read-tsconfig.svg?style=flat-square)](https://www.npmjs.org/package/read-tsconfig)
[![PRs](https://img.shields.io/badge/PRs-welcome-blue.svg?style=flat-square)](#)

---

## Install

```console
$ npm install read-tsconfig
```

## Usage

```js
const readTsconfig = require('read-tsconfig');

readTsconfig().then(config => {
    console.log(config);
    /*
    {
        compilerOptions: {
            outDir: 'dist',
            // ...
        }
    }
    */
});

console.log(readTsconfig.sync({cwd: './packages/foo'}));
```

## API

### readTsconfig(`options`)

- Params:
  - `options`: [`<ReadOptions>`](#readoptions)
- Returns: `Promise<{}>`

### readTsconfig.sync(`options`)

- Params:
  - `options`: [`<ReadOptions>`](#readoptions)
- Returns: `<object>`

#### `ReadOptions`

- `cwd`: `<string>`
  - default: `process.cwd()`


## Related

- [has-tsconfig](https://github.com/iguntur/has-tsconfig) - Indicates whether the project has `tsconfig.json` file.


## License

MIT © [Guntur Poetra](https://github.com/iguntur)
