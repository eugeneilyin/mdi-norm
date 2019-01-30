import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderColor } from './FilledBorderColor'
import { OutlineBorderColor } from './OutlineBorderColor'
import { RoundBorderColor } from './RoundBorderColor'
import { SharpBorderColor } from './SharpBorderColor'
import { TwoToneBorderColor } from './TwoToneBorderColor'

export const BorderColor = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderColor, OutlineBorderColor, RoundBorderColor, SharpBorderColor, TwoToneBorderColor)
