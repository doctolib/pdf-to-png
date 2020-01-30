"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pdfjsDist = require("pdfjs-dist");

var _pdfjsDist2 = _interopRequireDefault(_pdfjsDist);

var _pdf = require("pdfjs-dist/build/pdf.worker");

var _pdf2 = _interopRequireDefault(_pdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Based on https://github.com/mozilla/pdfjs-dist/blob/master/webpack.js

if (typeof window !== 'undefined' && 'Worker' in window) {
  _pdfjsDist2.default.GlobalWorkerOptions.workerPort = new _pdf2.default();
}

exports.default = _pdfjsDist2.default;