import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderStyle } from './FilledBorderStyle'
import { OutlineBorderStyle } from './OutlineBorderStyle'
import { RoundBorderStyle } from './RoundBorderStyle'
import { SharpBorderStyle } from './SharpBorderStyle'
import { TwoToneBorderStyle } from './TwoToneBorderStyle'

export const BorderStyle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderStyle, OutlineBorderStyle, RoundBorderStyle, SharpBorderStyle, TwoToneBorderStyle)
