import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMonetizationOn } from './FilledMonetizationOn'
import { OutlineMonetizationOn } from './OutlineMonetizationOn'
import { RoundMonetizationOn } from './RoundMonetizationOn'
import { SharpMonetizationOn } from './SharpMonetizationOn'
import { TwoToneMonetizationOn } from './TwoToneMonetizationOn'

export const MonetizationOn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMonetizationOn, OutlineMonetizationOn, RoundMonetizationOn, SharpMonetizationOn, TwoToneMonetizationOn)
