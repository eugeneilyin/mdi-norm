import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMore } from './FilledMore'
import { OutlineMore } from './OutlineMore'
import { RoundMore } from './RoundMore'
import { SharpMore } from './SharpMore'
import { TwoToneMore } from './TwoToneMore'

export const More = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMore, OutlineMore, RoundMore, SharpMore, TwoToneMore)
