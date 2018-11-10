import { createThemedIcon } from './utils/createThemedIcon'
import { IconDesktopWindowsFilled } from './IconDesktopWindowsFilled'
import { IconDesktopWindowsOutlined } from './IconDesktopWindowsOutlined'
import { IconDesktopWindowsRounded } from './IconDesktopWindowsRounded'
import { IconDesktopWindowsSharp } from './IconDesktopWindowsSharp'
import { IconDesktopWindowsTwoTone } from './IconDesktopWindowsTwoTone'

export const IconDesktopWindows = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDesktopWindowsFilled, IconDesktopWindowsOutlined, IconDesktopWindowsRounded, IconDesktopWindowsSharp, IconDesktopWindowsTwoTone)
