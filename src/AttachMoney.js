import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAttachMoney } from './FilledAttachMoney'
import { OutlineAttachMoney } from './OutlineAttachMoney'
import { RoundAttachMoney } from './RoundAttachMoney'
import { SharpAttachMoney } from './SharpAttachMoney'
import { TwoToneAttachMoney } from './TwoToneAttachMoney'

export const AttachMoney = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAttachMoney, OutlineAttachMoney, RoundAttachMoney, SharpAttachMoney, TwoToneAttachMoney)
