import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDesktopWindows } from './FilledDesktopWindows'
import { OutlineDesktopWindows } from './OutlineDesktopWindows'
import { RoundDesktopWindows } from './RoundDesktopWindows'
import { SharpDesktopWindows } from './SharpDesktopWindows'
import { TwoToneDesktopWindows } from './TwoToneDesktopWindows'

export const DesktopWindows = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDesktopWindows, OutlineDesktopWindows, RoundDesktopWindows, SharpDesktopWindows, TwoToneDesktopWindows)
