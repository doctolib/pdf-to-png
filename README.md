# Browser-side PDF to PNG conversion

## Setup

Configure the worker by adding this to your Webpack configuration:
```js
// webpack.config.js
{
  module: {
    rules: [
      {
        test: /pdf\.worker\.js$/,
        use: { loader: 'worker-loader', options: { inline: true } }
      }
    ]
  }
}
```

The `inline` option is not strictly necessary per se but highly advised to play well with [Cross-Origin Policy](https://github.com/webpack-contrib/worker-loader#cross-origin-policy).

## Usage

```js
import pdfToPng from "pdf-to-png";

// [...]

const pngBlob = await pdfToPng(pdfBlob);
```

Take a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as its unique mandatory argument and returns another Blob.

Most of the time, the entry will be a very specific type of Blob, the [File](https://developer.mozilla.org/en-US/docs/Web/API/File).

See [here](https://github.com/doctolib-eric/pdf-to-png-demo/blob/master/src/App.js) for a simple and self-contained implementation example (in a React context).

## Caveats

Implicit dependency to Webpack at the moment, due to the way workers are handled.

## Development

### Release

```js
yarn prepublish
git add lib/ && git commit -m "<version>"
git push origin master
git tag <version>
git push origin <version>
```

Process inspired by [this comment](https://stackoverflow.com/questions/29738381/how-to-publish-a-module-written-in-es6-to-npm/33976278#33976278).
