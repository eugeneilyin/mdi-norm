import { createThemedIcon } from './utils/createThemedIcon'
import { IconAddAlertFilled } from './IconAddAlertFilled'
import { IconAddAlertOutlined } from './IconAddAlertOutlined'
import { IconAddAlertRounded } from './IconAddAlertRounded'
import { IconAddAlertSharp } from './IconAddAlertSharp'
import { IconAddAlertTwoTone } from './IconAddAlertTwoTone'

export const IconAddAlert = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAddAlertFilled, IconAddAlertOutlined, IconAddAlertRounded, IconAddAlertSharp, IconAddAlertTwoTone)
