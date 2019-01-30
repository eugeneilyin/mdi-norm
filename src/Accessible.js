import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAccessible } from './FilledAccessible'
import { OutlineAccessible } from './OutlineAccessible'
import { RoundAccessible } from './RoundAccessible'
import { SharpAccessible } from './SharpAccessible'
import { TwoToneAccessible } from './TwoToneAccessible'

export const Accessible = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAccessible, OutlineAccessible, RoundAccessible, SharpAccessible, TwoToneAccessible)
