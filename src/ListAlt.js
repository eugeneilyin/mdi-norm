import { createThemedIcon } from './utils/createThemedIcon'
import { FilledListAlt } from './FilledListAlt'
import { OutlineListAlt } from './OutlineListAlt'
import { RoundListAlt } from './RoundListAlt'
import { SharpListAlt } from './SharpListAlt'
import { TwoToneListAlt } from './TwoToneListAlt'

export const ListAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledListAlt, OutlineListAlt, RoundListAlt, SharpListAlt, TwoToneListAlt)
