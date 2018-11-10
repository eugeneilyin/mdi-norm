import { createThemedIcon } from './utils/createThemedIcon'
import { IconHourglassEmptyFilled } from './IconHourglassEmptyFilled'
import { IconHourglassEmptyOutlined } from './IconHourglassEmptyOutlined'
import { IconHourglassEmptyRounded } from './IconHourglassEmptyRounded'
import { IconHourglassEmptySharp } from './IconHourglassEmptySharp'
import { IconHourglassEmptyTwoTone } from './IconHourglassEmptyTwoTone'

export const IconHourglassEmpty = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHourglassEmptyFilled, IconHourglassEmptyOutlined, IconHourglassEmptyRounded, IconHourglassEmptySharp, IconHourglassEmptyTwoTone)
