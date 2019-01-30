import { createThemedIcon } from './utils/createThemedIcon'
import { FilledToggleOff } from './FilledToggleOff'
import { OutlineToggleOff } from './OutlineToggleOff'
import { RoundToggleOff } from './RoundToggleOff'
import { SharpToggleOff } from './SharpToggleOff'
import { TwoToneToggleOff } from './TwoToneToggleOff'

export const ToggleOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledToggleOff, OutlineToggleOff, RoundToggleOff, SharpToggleOff, TwoToneToggleOff)
