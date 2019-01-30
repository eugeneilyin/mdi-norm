import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWarning } from './FilledWarning'
import { OutlineWarning } from './OutlineWarning'
import { RoundWarning } from './RoundWarning'
import { SharpWarning } from './SharpWarning'
import { TwoToneWarning } from './TwoToneWarning'

export const Warning = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWarning, OutlineWarning, RoundWarning, SharpWarning, TwoToneWarning)
