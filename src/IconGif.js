import { createThemedIcon } from './utils/createThemedIcon'
import { IconGifFilled } from './IconGifFilled'
import { IconGifOutlined } from './IconGifOutlined'
import { IconGifRounded } from './IconGifRounded'
import { IconGifSharp } from './IconGifSharp'
import { IconGifTwoTone } from './IconGifTwoTone'

export const IconGif = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGifFilled, IconGifOutlined, IconGifRounded, IconGifSharp, IconGifTwoTone)
