import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAllInclusive } from './FilledAllInclusive'
import { OutlineAllInclusive } from './OutlineAllInclusive'
import { RoundAllInclusive } from './RoundAllInclusive'
import { SharpAllInclusive } from './SharpAllInclusive'
import { TwoToneAllInclusive } from './TwoToneAllInclusive'

export const AllInclusive = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAllInclusive, OutlineAllInclusive, RoundAllInclusive, SharpAllInclusive, TwoToneAllInclusive)
