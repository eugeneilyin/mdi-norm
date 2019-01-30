import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTransferWithinAStation } from './FilledTransferWithinAStation'
import { OutlineTransferWithinAStation } from './OutlineTransferWithinAStation'
import { RoundTransferWithinAStation } from './RoundTransferWithinAStation'
import { SharpTransferWithinAStation } from './SharpTransferWithinAStation'
import { TwoToneTransferWithinAStation } from './TwoToneTransferWithinAStation'

export const TransferWithinAStation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTransferWithinAStation, OutlineTransferWithinAStation, RoundTransferWithinAStation, SharpTransferWithinAStation, TwoToneTransferWithinAStation)
