import { createThemedIcon } from './utils/createThemedIcon'
import { FilledScreenLockPortrait } from './FilledScreenLockPortrait'
import { OutlineScreenLockPortrait } from './OutlineScreenLockPortrait'
import { RoundScreenLockPortrait } from './RoundScreenLockPortrait'
import { SharpScreenLockPortrait } from './SharpScreenLockPortrait'
import { TwoToneScreenLockPortrait } from './TwoToneScreenLockPortrait'

export const ScreenLockPortrait = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledScreenLockPortrait, OutlineScreenLockPortrait, RoundScreenLockPortrait, SharpScreenLockPortrait, TwoToneScreenLockPortrait)
