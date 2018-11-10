import { createThemedIcon } from './utils/createThemedIcon'
import { IconWavesFilled } from './IconWavesFilled'
import { IconWavesOutlined } from './IconWavesOutlined'
import { IconWavesRounded } from './IconWavesRounded'
import { IconWavesSharp } from './IconWavesSharp'
import { IconWavesTwoTone } from './IconWavesTwoTone'

export const IconWaves = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWavesFilled, IconWavesOutlined, IconWavesRounded, IconWavesSharp, IconWavesTwoTone)
