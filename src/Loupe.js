import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLoupe } from './FilledLoupe'
import { OutlineLoupe } from './OutlineLoupe'
import { RoundLoupe } from './RoundLoupe'
import { SharpLoupe } from './SharpLoupe'
import { TwoToneLoupe } from './TwoToneLoupe'

export const Loupe = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLoupe, OutlineLoupe, RoundLoupe, SharpLoupe, TwoToneLoupe)
