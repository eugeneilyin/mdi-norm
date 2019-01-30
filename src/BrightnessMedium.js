import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBrightnessMedium } from './FilledBrightnessMedium'
import { OutlineBrightnessMedium } from './OutlineBrightnessMedium'
import { RoundBrightnessMedium } from './RoundBrightnessMedium'
import { SharpBrightnessMedium } from './SharpBrightnessMedium'
import { TwoToneBrightnessMedium } from './TwoToneBrightnessMedium'

export const BrightnessMedium = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBrightnessMedium, OutlineBrightnessMedium, RoundBrightnessMedium, SharpBrightnessMedium, TwoToneBrightnessMedium)
