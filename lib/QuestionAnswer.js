"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledQuestionAnswer = require("./FilledQuestionAnswer");

var _OutlineQuestionAnswer = require("./OutlineQuestionAnswer");

var _RoundQuestionAnswer = require("./RoundQuestionAnswer");

var _SharpQuestionAnswer = require("./SharpQuestionAnswer");

var _TwoToneQuestionAnswer = require("./TwoToneQuestionAnswer");

var QuestionAnswer =
/*#__PURE__*/
function QuestionAnswer(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledQuestionAnswer.FilledQuestionAnswer, _OutlineQuestionAnswer.OutlineQuestionAnswer, _RoundQuestionAnswer.RoundQuestionAnswer, _SharpQuestionAnswer.SharpQuestionAnswer, _TwoToneQuestionAnswer.TwoToneQuestionAnswer);
};

exports.QuestionAnswer = QuestionAnswer;