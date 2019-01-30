import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPayment } from './FilledPayment'
import { OutlinePayment } from './OutlinePayment'
import { RoundPayment } from './RoundPayment'
import { SharpPayment } from './SharpPayment'
import { TwoTonePayment } from './TwoTonePayment'

export const Payment = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPayment, OutlinePayment, RoundPayment, SharpPayment, TwoTonePayment)
