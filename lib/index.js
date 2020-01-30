"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pdf = require("./pdf");

var _pdf2 = _interopRequireDefault(_pdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Inspired by https://stackoverflow.com/questions/12921052/parsing-pdf-pages-as-javascript-images
exports.default = async function (pdfBlob) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$scale = options.scale,
      scale = _options$scale === undefined ? 2 : _options$scale;

  var url = URL.createObjectURL(pdfBlob);
  var pdf = await _pdf2.default.getDocument(url).promise;
  URL.revokeObjectURL(url);
  var page = await pdf.getPage(1);

  var viewport = page.getViewport({ scale: scale });

  var canvas = document.createElement("canvas");
  document.body.append(canvas);
  var context = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  canvas.style = "height: " + viewport.height + "px; width: " + viewport.width + "px; display: none";

  await page.render({ canvasContext: context, viewport: viewport }).promise;
  return new Promise(function (resolve) {
    canvas.toBlob(function (blob) {
      canvas.remove();
      resolve(blob);
    });
  });
};