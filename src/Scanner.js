import { createThemedIcon } from './utils/createThemedIcon'
import { FilledScanner } from './FilledScanner'
import { OutlineScanner } from './OutlineScanner'
import { RoundScanner } from './RoundScanner'
import { SharpScanner } from './SharpScanner'
import { TwoToneScanner } from './TwoToneScanner'

export const Scanner = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledScanner, OutlineScanner, RoundScanner, SharpScanner, TwoToneScanner)
