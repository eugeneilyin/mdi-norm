import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLabelImportant } from './FilledLabelImportant'
import { OutlineLabelImportant } from './OutlineLabelImportant'
import { RoundLabelImportant } from './RoundLabelImportant'
import { SharpLabelImportant } from './SharpLabelImportant'
import { TwoToneLabelImportant } from './TwoToneLabelImportant'

export const LabelImportant = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLabelImportant, OutlineLabelImportant, RoundLabelImportant, SharpLabelImportant, TwoToneLabelImportant)
