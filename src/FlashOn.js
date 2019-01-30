import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFlashOn } from './FilledFlashOn'
import { OutlineFlashOn } from './OutlineFlashOn'
import { RoundFlashOn } from './RoundFlashOn'
import { SharpFlashOn } from './SharpFlashOn'
import { TwoToneFlashOn } from './TwoToneFlashOn'

export const FlashOn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFlashOn, OutlineFlashOn, RoundFlashOn, SharpFlashOn, TwoToneFlashOn)
