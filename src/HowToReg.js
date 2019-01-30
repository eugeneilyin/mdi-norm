import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHowToReg } from './FilledHowToReg'
import { OutlineHowToReg } from './OutlineHowToReg'
import { RoundHowToReg } from './RoundHowToReg'
import { SharpHowToReg } from './SharpHowToReg'
import { TwoToneHowToReg } from './TwoToneHowToReg'

export const HowToReg = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHowToReg, OutlineHowToReg, RoundHowToReg, SharpHowToReg, TwoToneHowToReg)
