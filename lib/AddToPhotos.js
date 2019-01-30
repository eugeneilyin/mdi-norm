"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAddToPhotos = require("./FilledAddToPhotos");

var _OutlineAddToPhotos = require("./OutlineAddToPhotos");

var _RoundAddToPhotos = require("./RoundAddToPhotos");

var _SharpAddToPhotos = require("./SharpAddToPhotos");

var _TwoToneAddToPhotos = require("./TwoToneAddToPhotos");

var AddToPhotos =
/*#__PURE__*/
function AddToPhotos(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAddToPhotos.FilledAddToPhotos, _OutlineAddToPhotos.OutlineAddToPhotos, _RoundAddToPhotos.RoundAddToPhotos, _SharpAddToPhotos.SharpAddToPhotos, _TwoToneAddToPhotos.TwoToneAddToPhotos);
};

exports.AddToPhotos = AddToPhotos;