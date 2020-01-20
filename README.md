# Browser-side PDF to PNG conversion

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

Will only work within the context of a webpack-based project for now due to the hardcoded dependency to the webpack-configured version of PDF.js

## Development

### Release

```js
yarn prepublish
git add lib/ && git commit -m "<version>"
git tag <version>
git push origin <version>
```

Process inspired by [this comment](https://stackoverflow.com/questions/29738381/how-to-publish-a-module-written-in-es6-to-npm/33976278#33976278).
