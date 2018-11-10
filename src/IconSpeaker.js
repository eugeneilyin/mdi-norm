import { createThemedIcon } from './utils/createThemedIcon'
import { IconSpeakerFilled } from './IconSpeakerFilled'
import { IconSpeakerOutlined } from './IconSpeakerOutlined'
import { IconSpeakerRounded } from './IconSpeakerRounded'
import { IconSpeakerSharp } from './IconSpeakerSharp'
import { IconSpeakerTwoTone } from './IconSpeakerTwoTone'

export const IconSpeaker = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSpeakerFilled, IconSpeakerOutlined, IconSpeakerRounded, IconSpeakerSharp, IconSpeakerTwoTone)
