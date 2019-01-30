import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWaves } from './FilledWaves'
import { OutlineWaves } from './OutlineWaves'
import { RoundWaves } from './RoundWaves'
import { SharpWaves } from './SharpWaves'
import { TwoToneWaves } from './TwoToneWaves'

export const Waves = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWaves, OutlineWaves, RoundWaves, SharpWaves, TwoToneWaves)
