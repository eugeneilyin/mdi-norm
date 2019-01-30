import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHighQuality } from './FilledHighQuality'
import { OutlineHighQuality } from './OutlineHighQuality'
import { RoundHighQuality } from './RoundHighQuality'
import { SharpHighQuality } from './SharpHighQuality'
import { TwoToneHighQuality } from './TwoToneHighQuality'

export const HighQuality = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHighQuality, OutlineHighQuality, RoundHighQuality, SharpHighQuality, TwoToneHighQuality)
