import { createThemedIcon } from './utils/createThemedIcon'
import { FilledToggleOn } from './FilledToggleOn'
import { OutlineToggleOn } from './OutlineToggleOn'
import { RoundToggleOn } from './RoundToggleOn'
import { SharpToggleOn } from './SharpToggleOn'
import { TwoToneToggleOn } from './TwoToneToggleOn'

export const ToggleOn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledToggleOn, OutlineToggleOn, RoundToggleOn, SharpToggleOn, TwoToneToggleOn)
