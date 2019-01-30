import { createThemedIcon } from './utils/createThemedIcon'
import { FilledExploreOff } from './FilledExploreOff'
import { OutlineExploreOff } from './OutlineExploreOff'
import { RoundExploreOff } from './RoundExploreOff'
import { SharpExploreOff } from './SharpExploreOff'
import { TwoToneExploreOff } from './TwoToneExploreOff'

export const ExploreOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledExploreOff, OutlineExploreOff, RoundExploreOff, SharpExploreOff, TwoToneExploreOff)
