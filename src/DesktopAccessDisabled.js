import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDesktopAccessDisabled } from './FilledDesktopAccessDisabled'
import { OutlineDesktopAccessDisabled } from './OutlineDesktopAccessDisabled'
import { RoundDesktopAccessDisabled } from './RoundDesktopAccessDisabled'
import { SharpDesktopAccessDisabled } from './SharpDesktopAccessDisabled'
import { TwoToneDesktopAccessDisabled } from './TwoToneDesktopAccessDisabled'

export const DesktopAccessDisabled = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDesktopAccessDisabled, OutlineDesktopAccessDisabled, RoundDesktopAccessDisabled, SharpDesktopAccessDisabled, TwoToneDesktopAccessDisabled)
