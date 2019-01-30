import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAccountBalance } from './FilledAccountBalance'
import { OutlineAccountBalance } from './OutlineAccountBalance'
import { RoundAccountBalance } from './RoundAccountBalance'
import { SharpAccountBalance } from './SharpAccountBalance'
import { TwoToneAccountBalance } from './TwoToneAccountBalance'

export const AccountBalance = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAccountBalance, OutlineAccountBalance, RoundAccountBalance, SharpAccountBalance, TwoToneAccountBalance)
