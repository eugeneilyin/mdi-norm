import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLiveTv } from './FilledLiveTv'
import { OutlineLiveTv } from './OutlineLiveTv'
import { RoundLiveTv } from './RoundLiveTv'
import { SharpLiveTv } from './SharpLiveTv'
import { TwoToneLiveTv } from './TwoToneLiveTv'

export const LiveTv = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLiveTv, OutlineLiveTv, RoundLiveTv, SharpLiveTv, TwoToneLiveTv)
