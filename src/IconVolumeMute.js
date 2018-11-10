import { createThemedIcon } from './utils/createThemedIcon'
import { IconVolumeMuteFilled } from './IconVolumeMuteFilled'
import { IconVolumeMuteOutlined } from './IconVolumeMuteOutlined'
import { IconVolumeMuteRounded } from './IconVolumeMuteRounded'
import { IconVolumeMuteSharp } from './IconVolumeMuteSharp'
import { IconVolumeMuteTwoTone } from './IconVolumeMuteTwoTone'

export const IconVolumeMute = /*#__PURE__*/ props =>
  createThemedIcon(props, IconVolumeMuteFilled, IconVolumeMuteOutlined, IconVolumeMuteRounded, IconVolumeMuteSharp, IconVolumeMuteTwoTone)
