import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSpaceBar } from './FilledSpaceBar'
import { OutlineSpaceBar } from './OutlineSpaceBar'
import { RoundSpaceBar } from './RoundSpaceBar'
import { SharpSpaceBar } from './SharpSpaceBar'
import { TwoToneSpaceBar } from './TwoToneSpaceBar'

export const SpaceBar = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSpaceBar, OutlineSpaceBar, RoundSpaceBar, SharpSpaceBar, TwoToneSpaceBar)
