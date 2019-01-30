import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFlashAuto } from './FilledFlashAuto'
import { OutlineFlashAuto } from './OutlineFlashAuto'
import { RoundFlashAuto } from './RoundFlashAuto'
import { SharpFlashAuto } from './SharpFlashAuto'
import { TwoToneFlashAuto } from './TwoToneFlashAuto'

export const FlashAuto = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFlashAuto, OutlineFlashAuto, RoundFlashAuto, SharpFlashAuto, TwoToneFlashAuto)
