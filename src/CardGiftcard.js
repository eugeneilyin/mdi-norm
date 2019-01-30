import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCardGiftcard } from './FilledCardGiftcard'
import { OutlineCardGiftcard } from './OutlineCardGiftcard'
import { RoundCardGiftcard } from './RoundCardGiftcard'
import { SharpCardGiftcard } from './SharpCardGiftcard'
import { TwoToneCardGiftcard } from './TwoToneCardGiftcard'

export const CardGiftcard = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCardGiftcard, OutlineCardGiftcard, RoundCardGiftcard, SharpCardGiftcard, TwoToneCardGiftcard)
