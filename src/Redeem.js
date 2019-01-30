import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRedeem } from './FilledRedeem'
import { OutlineRedeem } from './OutlineRedeem'
import { RoundRedeem } from './RoundRedeem'
import { SharpRedeem } from './SharpRedeem'
import { TwoToneRedeem } from './TwoToneRedeem'

export const Redeem = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRedeem, OutlineRedeem, RoundRedeem, SharpRedeem, TwoToneRedeem)
