import { createThemedIcon } from './utils/createThemedIcon'
import { IconHotelFilled } from './IconHotelFilled'
import { IconHotelOutlined } from './IconHotelOutlined'
import { IconHotelRounded } from './IconHotelRounded'
import { IconHotelSharp } from './IconHotelSharp'
import { IconHotelTwoTone } from './IconHotelTwoTone'

export const IconHotel = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHotelFilled, IconHotelOutlined, IconHotelRounded, IconHotelSharp, IconHotelTwoTone)
