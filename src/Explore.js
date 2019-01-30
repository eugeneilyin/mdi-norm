import { createThemedIcon } from './utils/createThemedIcon'
import { FilledExplore } from './FilledExplore'
import { OutlineExplore } from './OutlineExplore'
import { RoundExplore } from './RoundExplore'
import { SharpExplore } from './SharpExplore'
import { TwoToneExplore } from './TwoToneExplore'

export const Explore = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledExplore, OutlineExplore, RoundExplore, SharpExplore, TwoToneExplore)
