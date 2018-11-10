import { createThemedIcon } from './utils/createThemedIcon'
import { IconCallToActionFilled } from './IconCallToActionFilled'
import { IconCallToActionOutlined } from './IconCallToActionOutlined'
import { IconCallToActionRounded } from './IconCallToActionRounded'
import { IconCallToActionSharp } from './IconCallToActionSharp'
import { IconCallToActionTwoTone } from './IconCallToActionTwoTone'

export const IconCallToAction = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCallToActionFilled, IconCallToActionOutlined, IconCallToActionRounded, IconCallToActionSharp, IconCallToActionTwoTone)
