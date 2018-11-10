import { createThemedIcon } from './utils/createThemedIcon'
import { IconDevicesFilled } from './IconDevicesFilled'
import { IconDevicesOutlined } from './IconDevicesOutlined'
import { IconDevicesRounded } from './IconDevicesRounded'
import { IconDevicesSharp } from './IconDevicesSharp'
import { IconDevicesTwoTone } from './IconDevicesTwoTone'

export const IconDevices = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDevicesFilled, IconDevicesOutlined, IconDevicesRounded, IconDevicesSharp, IconDevicesTwoTone)
