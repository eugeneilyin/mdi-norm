import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFilter } from './FilledFilter'
import { OutlineFilter } from './OutlineFilter'
import { RoundFilter } from './RoundFilter'
import { SharpFilter } from './SharpFilter'
import { TwoToneFilter } from './TwoToneFilter'

export const Filter = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFilter, OutlineFilter, RoundFilter, SharpFilter, TwoToneFilter)
