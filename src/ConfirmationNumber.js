import { createThemedIcon } from './utils/createThemedIcon'
import { FilledConfirmationNumber } from './FilledConfirmationNumber'
import { OutlineConfirmationNumber } from './OutlineConfirmationNumber'
import { RoundConfirmationNumber } from './RoundConfirmationNumber'
import { SharpConfirmationNumber } from './SharpConfirmationNumber'
import { TwoToneConfirmationNumber } from './TwoToneConfirmationNumber'

export const ConfirmationNumber = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledConfirmationNumber, OutlineConfirmationNumber, RoundConfirmationNumber, SharpConfirmationNumber, TwoToneConfirmationNumber)
