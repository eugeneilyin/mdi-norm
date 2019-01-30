import { createThemedIcon } from './utils/createThemedIcon'
import { FilledQuestionAnswer } from './FilledQuestionAnswer'
import { OutlineQuestionAnswer } from './OutlineQuestionAnswer'
import { RoundQuestionAnswer } from './RoundQuestionAnswer'
import { SharpQuestionAnswer } from './SharpQuestionAnswer'
import { TwoToneQuestionAnswer } from './TwoToneQuestionAnswer'

export const QuestionAnswer = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledQuestionAnswer, OutlineQuestionAnswer, RoundQuestionAnswer, SharpQuestionAnswer, TwoToneQuestionAnswer)
