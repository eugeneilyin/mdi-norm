import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBuild } from './FilledBuild'
import { OutlineBuild } from './OutlineBuild'
import { RoundBuild } from './RoundBuild'
import { SharpBuild } from './SharpBuild'
import { TwoToneBuild } from './TwoToneBuild'

export const Build = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBuild, OutlineBuild, RoundBuild, SharpBuild, TwoToneBuild)
