import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDesktopMac } from './FilledDesktopMac'
import { OutlineDesktopMac } from './OutlineDesktopMac'
import { RoundDesktopMac } from './RoundDesktopMac'
import { SharpDesktopMac } from './SharpDesktopMac'
import { TwoToneDesktopMac } from './TwoToneDesktopMac'

export const DesktopMac = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDesktopMac, OutlineDesktopMac, RoundDesktopMac, SharpDesktopMac, TwoToneDesktopMac)
