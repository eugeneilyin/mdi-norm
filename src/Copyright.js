import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCopyright } from './FilledCopyright'
import { OutlineCopyright } from './OutlineCopyright'
import { RoundCopyright } from './RoundCopyright'
import { SharpCopyright } from './SharpCopyright'
import { TwoToneCopyright } from './TwoToneCopyright'

export const Copyright = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCopyright, OutlineCopyright, RoundCopyright, SharpCopyright, TwoToneCopyright)
