import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMoney } from './FilledMoney'
import { OutlineMoney } from './OutlineMoney'
import { RoundMoney } from './RoundMoney'
import { SharpMoney } from './SharpMoney'
import { TwoToneMoney } from './TwoToneMoney'

export const Money = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMoney, OutlineMoney, RoundMoney, SharpMoney, TwoToneMoney)
