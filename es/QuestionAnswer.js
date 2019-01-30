import { createThemedIcon } from './utils/createThemedIcon';
import { FilledQuestionAnswer } from './FilledQuestionAnswer';
import { OutlineQuestionAnswer } from './OutlineQuestionAnswer';
import { RoundQuestionAnswer } from './RoundQuestionAnswer';
import { SharpQuestionAnswer } from './SharpQuestionAnswer';
import { TwoToneQuestionAnswer } from './TwoToneQuestionAnswer';
export var QuestionAnswer =
/*#__PURE__*/
function QuestionAnswer(props) {
  return createThemedIcon(props, FilledQuestionAnswer, OutlineQuestionAnswer, RoundQuestionAnswer, SharpQuestionAnswer, TwoToneQuestionAnswer);
};