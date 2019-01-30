import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAssessment } from './FilledAssessment'
import { OutlineAssessment } from './OutlineAssessment'
import { RoundAssessment } from './RoundAssessment'
import { SharpAssessment } from './SharpAssessment'
import { TwoToneAssessment } from './TwoToneAssessment'

export const Assessment = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAssessment, OutlineAssessment, RoundAssessment, SharpAssessment, TwoToneAssessment)
