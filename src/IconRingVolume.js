import { createThemedIcon } from './utils/createThemedIcon'
import { IconRingVolumeFilled } from './IconRingVolumeFilled'
import { IconRingVolumeOutlined } from './IconRingVolumeOutlined'
import { IconRingVolumeRounded } from './IconRingVolumeRounded'
import { IconRingVolumeSharp } from './IconRingVolumeSharp'
import { IconRingVolumeTwoTone } from './IconRingVolumeTwoTone'

export const IconRingVolume = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRingVolumeFilled, IconRingVolumeOutlined, IconRingVolumeRounded, IconRingVolumeSharp, IconRingVolumeTwoTone)
