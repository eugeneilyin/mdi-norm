import { createThemedIcon } from './utils/createThemedIcon'
import { IconArrowBackFilled } from './IconArrowBackFilled'
import { IconArrowBackOutlined } from './IconArrowBackOutlined'
import { IconArrowBackRounded } from './IconArrowBackRounded'
import { IconArrowBackSharp } from './IconArrowBackSharp'
import { IconArrowBackTwoTone } from './IconArrowBackTwoTone'

export const IconArrowBack = /*#__PURE__*/ props =>
  createThemedIcon(props, IconArrowBackFilled, IconArrowBackOutlined, IconArrowBackRounded, IconArrowBackSharp, IconArrowBackTwoTone)
