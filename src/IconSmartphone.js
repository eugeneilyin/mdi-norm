import { createThemedIcon } from './utils/createThemedIcon'
import { IconSmartphoneFilled } from './IconSmartphoneFilled'
import { IconSmartphoneOutlined } from './IconSmartphoneOutlined'
import { IconSmartphoneRounded } from './IconSmartphoneRounded'
import { IconSmartphoneSharp } from './IconSmartphoneSharp'
import { IconSmartphoneTwoTone } from './IconSmartphoneTwoTone'

export const IconSmartphone = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSmartphoneFilled, IconSmartphoneOutlined, IconSmartphoneRounded, IconSmartphoneSharp, IconSmartphoneTwoTone)
