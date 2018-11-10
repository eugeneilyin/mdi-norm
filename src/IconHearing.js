import { createThemedIcon } from './utils/createThemedIcon'
import { IconHearingFilled } from './IconHearingFilled'
import { IconHearingOutlined } from './IconHearingOutlined'
import { IconHearingRounded } from './IconHearingRounded'
import { IconHearingSharp } from './IconHearingSharp'
import { IconHearingTwoTone } from './IconHearingTwoTone'

export const IconHearing = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHearingFilled, IconHearingOutlined, IconHearingRounded, IconHearingSharp, IconHearingTwoTone)
