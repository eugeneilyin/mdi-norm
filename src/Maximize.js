import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMaximize } from './FilledMaximize'
import { OutlineMaximize } from './OutlineMaximize'
import { RoundMaximize } from './RoundMaximize'
import { SharpMaximize } from './SharpMaximize'
import { TwoToneMaximize } from './TwoToneMaximize'

export const Maximize = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMaximize, OutlineMaximize, RoundMaximize, SharpMaximize, TwoToneMaximize)
