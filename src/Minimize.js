import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMinimize } from './FilledMinimize'
import { OutlineMinimize } from './OutlineMinimize'
import { RoundMinimize } from './RoundMinimize'
import { SharpMinimize } from './SharpMinimize'
import { TwoToneMinimize } from './TwoToneMinimize'

export const Minimize = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMinimize, OutlineMinimize, RoundMinimize, SharpMinimize, TwoToneMinimize)
