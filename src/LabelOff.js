import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLabelOff } from './FilledLabelOff'
import { OutlineLabelOff } from './OutlineLabelOff'
import { RoundLabelOff } from './RoundLabelOff'
import { SharpLabelOff } from './SharpLabelOff'
import { TwoToneLabelOff } from './TwoToneLabelOff'

export const LabelOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLabelOff, OutlineLabelOff, RoundLabelOff, SharpLabelOff, TwoToneLabelOff)
