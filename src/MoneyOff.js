import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMoneyOff } from './FilledMoneyOff'
import { OutlineMoneyOff } from './OutlineMoneyOff'
import { RoundMoneyOff } from './RoundMoneyOff'
import { SharpMoneyOff } from './SharpMoneyOff'
import { TwoToneMoneyOff } from './TwoToneMoneyOff'

export const MoneyOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMoneyOff, OutlineMoneyOff, RoundMoneyOff, SharpMoneyOff, TwoToneMoneyOff)
