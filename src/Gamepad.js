import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGamepad } from './FilledGamepad'
import { OutlineGamepad } from './OutlineGamepad'
import { RoundGamepad } from './RoundGamepad'
import { SharpGamepad } from './SharpGamepad'
import { TwoToneGamepad } from './TwoToneGamepad'

export const Gamepad = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGamepad, OutlineGamepad, RoundGamepad, SharpGamepad, TwoToneGamepad)
