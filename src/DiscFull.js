import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDiscFull } from './FilledDiscFull'
import { OutlineDiscFull } from './OutlineDiscFull'
import { RoundDiscFull } from './RoundDiscFull'
import { SharpDiscFull } from './SharpDiscFull'
import { TwoToneDiscFull } from './TwoToneDiscFull'

export const DiscFull = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDiscFull, OutlineDiscFull, RoundDiscFull, SharpDiscFull, TwoToneDiscFull)
