import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLaunch } from './FilledLaunch'
import { OutlineLaunch } from './OutlineLaunch'
import { RoundLaunch } from './RoundLaunch'
import { SharpLaunch } from './SharpLaunch'
import { TwoToneLaunch } from './TwoToneLaunch'

export const Launch = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLaunch, OutlineLaunch, RoundLaunch, SharpLaunch, TwoToneLaunch)
