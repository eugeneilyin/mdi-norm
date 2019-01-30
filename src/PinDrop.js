import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPinDrop } from './FilledPinDrop'
import { OutlinePinDrop } from './OutlinePinDrop'
import { RoundPinDrop } from './RoundPinDrop'
import { SharpPinDrop } from './SharpPinDrop'
import { TwoTonePinDrop } from './TwoTonePinDrop'

export const PinDrop = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPinDrop, OutlinePinDrop, RoundPinDrop, SharpPinDrop, TwoTonePinDrop)
