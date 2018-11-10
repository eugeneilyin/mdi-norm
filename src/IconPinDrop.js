import { createThemedIcon } from './utils/createThemedIcon'
import { IconPinDropFilled } from './IconPinDropFilled'
import { IconPinDropOutlined } from './IconPinDropOutlined'
import { IconPinDropRounded } from './IconPinDropRounded'
import { IconPinDropSharp } from './IconPinDropSharp'
import { IconPinDropTwoTone } from './IconPinDropTwoTone'

export const IconPinDrop = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPinDropFilled, IconPinDropOutlined, IconPinDropRounded, IconPinDropSharp, IconPinDropTwoTone)
