import { createThemedIcon } from './utils/createThemedIcon'
import { IconWidgetsFilled } from './IconWidgetsFilled'
import { IconWidgetsOutlined } from './IconWidgetsOutlined'
import { IconWidgetsRounded } from './IconWidgetsRounded'
import { IconWidgetsSharp } from './IconWidgetsSharp'
import { IconWidgetsTwoTone } from './IconWidgetsTwoTone'

export const IconWidgets = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWidgetsFilled, IconWidgetsOutlined, IconWidgetsRounded, IconWidgetsSharp, IconWidgetsTwoTone)
