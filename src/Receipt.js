import { createThemedIcon } from './utils/createThemedIcon'
import { FilledReceipt } from './FilledReceipt'
import { OutlineReceipt } from './OutlineReceipt'
import { RoundReceipt } from './RoundReceipt'
import { SharpReceipt } from './SharpReceipt'
import { TwoToneReceipt } from './TwoToneReceipt'

export const Receipt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledReceipt, OutlineReceipt, RoundReceipt, SharpReceipt, TwoToneReceipt)
