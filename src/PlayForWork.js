import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPlayForWork } from './FilledPlayForWork'
import { OutlinePlayForWork } from './OutlinePlayForWork'
import { RoundPlayForWork } from './RoundPlayForWork'
import { SharpPlayForWork } from './SharpPlayForWork'
import { TwoTonePlayForWork } from './TwoTonePlayForWork'

export const PlayForWork = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPlayForWork, OutlinePlayForWork, RoundPlayForWork, SharpPlayForWork, TwoTonePlayForWork)
