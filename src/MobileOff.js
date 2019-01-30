import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMobileOff } from './FilledMobileOff'
import { OutlineMobileOff } from './OutlineMobileOff'
import { RoundMobileOff } from './RoundMobileOff'
import { SharpMobileOff } from './SharpMobileOff'
import { TwoToneMobileOff } from './TwoToneMobileOff'

export const MobileOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMobileOff, OutlineMobileOff, RoundMobileOff, SharpMobileOff, TwoToneMobileOff)
