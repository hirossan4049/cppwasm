# test1

ここまでのあらすじ

```bash
$ npm init -y
$ npm install react react-dom
$ npm install -D webpack webpack-dev-server webpack-cli @babel/core babel-loader @babel/preset-react html-webpack-plugin file-loader path-browserify
```

あとはいい感じにファイルを作ったりする。

### 使い方
```bash
$ yarn start
```

`cpp`をビルドしたい場合は
```bash
$ yarn build-wasm
```
`emcc`入ってる前提ﾖ.

------

## 説明

```
.
├── cpp # wasmに変換するcpp達
│   ├── bindings # jsとバインディング用
│   │   └── Bindings.cpp
│   └── src # cppのファイル達置き場
│       ├── HelloWorld.cpp
│       └── HelloWorld.h
├── package.json
├── readme.md
├── src
│   ├── App.js
│   ├── index.html
│   ├── index.js
│   └── wasm # cppをビルドしたやつ達
│       ├── HelloWorld.js
│       └── HelloWorld.wasm
└── webpack.config.js # webpackの設定。

5 directories, 11 files
```