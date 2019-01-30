import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderLeft } from './FilledBorderLeft'
import { OutlineBorderLeft } from './OutlineBorderLeft'
import { RoundBorderLeft } from './RoundBorderLeft'
import { SharpBorderLeft } from './SharpBorderLeft'
import { TwoToneBorderLeft } from './TwoToneBorderLeft'

export const BorderLeft = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderLeft, OutlineBorderLeft, RoundBorderLeft, SharpBorderLeft, TwoToneBorderLeft)
