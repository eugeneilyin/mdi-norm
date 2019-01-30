import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalCafe } from './FilledLocalCafe'
import { OutlineLocalCafe } from './OutlineLocalCafe'
import { RoundLocalCafe } from './RoundLocalCafe'
import { SharpLocalCafe } from './SharpLocalCafe'
import { TwoToneLocalCafe } from './TwoToneLocalCafe'

export const LocalCafe = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalCafe, OutlineLocalCafe, RoundLocalCafe, SharpLocalCafe, TwoToneLocalCafe)
