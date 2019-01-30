import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCreditCard } from './FilledCreditCard'
import { OutlineCreditCard } from './OutlineCreditCard'
import { RoundCreditCard } from './RoundCreditCard'
import { SharpCreditCard } from './SharpCreditCard'
import { TwoToneCreditCard } from './TwoToneCreditCard'

export const CreditCard = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCreditCard, OutlineCreditCard, RoundCreditCard, SharpCreditCard, TwoToneCreditCard)
