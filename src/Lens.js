import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLens } from './FilledLens'
import { OutlineLens } from './OutlineLens'
import { RoundLens } from './RoundLens'
import { SharpLens } from './SharpLens'
import { TwoToneLens } from './TwoToneLens'

export const Lens = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLens, OutlineLens, RoundLens, SharpLens, TwoToneLens)
