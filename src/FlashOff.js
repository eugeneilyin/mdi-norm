import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFlashOff } from './FilledFlashOff'
import { OutlineFlashOff } from './OutlineFlashOff'
import { RoundFlashOff } from './RoundFlashOff'
import { SharpFlashOff } from './SharpFlashOff'
import { TwoToneFlashOff } from './TwoToneFlashOff'

export const FlashOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFlashOff, OutlineFlashOff, RoundFlashOff, SharpFlashOff, TwoToneFlashOff)
