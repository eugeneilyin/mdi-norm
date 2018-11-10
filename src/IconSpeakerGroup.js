import { createThemedIcon } from './utils/createThemedIcon'
import { IconSpeakerGroupFilled } from './IconSpeakerGroupFilled'
import { IconSpeakerGroupOutlined } from './IconSpeakerGroupOutlined'
import { IconSpeakerGroupRounded } from './IconSpeakerGroupRounded'
import { IconSpeakerGroupSharp } from './IconSpeakerGroupSharp'
import { IconSpeakerGroupTwoTone } from './IconSpeakerGroupTwoTone'

export const IconSpeakerGroup = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSpeakerGroupFilled, IconSpeakerGroupOutlined, IconSpeakerGroupRounded, IconSpeakerGroupSharp, IconSpeakerGroupTwoTone)
