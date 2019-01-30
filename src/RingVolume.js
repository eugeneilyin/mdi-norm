import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRingVolume } from './FilledRingVolume'
import { OutlineRingVolume } from './OutlineRingVolume'
import { RoundRingVolume } from './RoundRingVolume'
import { SharpRingVolume } from './SharpRingVolume'
import { TwoToneRingVolume } from './TwoToneRingVolume'

export const RingVolume = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRingVolume, OutlineRingVolume, RoundRingVolume, SharpRingVolume, TwoToneRingVolume)
