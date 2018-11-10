import { createThemedIcon } from './utils/createThemedIcon'
import { IconBatteryAlertFilled } from './IconBatteryAlertFilled'
import { IconBatteryAlertOutlined } from './IconBatteryAlertOutlined'
import { IconBatteryAlertRounded } from './IconBatteryAlertRounded'
import { IconBatteryAlertSharp } from './IconBatteryAlertSharp'
import { IconBatteryAlertTwoTone } from './IconBatteryAlertTwoTone'

export const IconBatteryAlert = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBatteryAlertFilled, IconBatteryAlertOutlined, IconBatteryAlertRounded, IconBatteryAlertSharp, IconBatteryAlertTwoTone)
