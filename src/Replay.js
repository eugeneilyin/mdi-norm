import { createThemedIcon } from './utils/createThemedIcon'
import { FilledReplay } from './FilledReplay'
import { OutlineReplay } from './OutlineReplay'
import { RoundReplay } from './RoundReplay'
import { SharpReplay } from './SharpReplay'
import { TwoToneReplay } from './TwoToneReplay'

export const Replay = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledReplay, OutlineReplay, RoundReplay, SharpReplay, TwoToneReplay)
