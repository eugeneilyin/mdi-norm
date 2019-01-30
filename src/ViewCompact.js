import { createThemedIcon } from './utils/createThemedIcon'
import { FilledViewCompact } from './FilledViewCompact'
import { OutlineViewCompact } from './OutlineViewCompact'
import { RoundViewCompact } from './RoundViewCompact'
import { SharpViewCompact } from './SharpViewCompact'
import { TwoToneViewCompact } from './TwoToneViewCompact'

export const ViewCompact = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledViewCompact, OutlineViewCompact, RoundViewCompact, SharpViewCompact, TwoToneViewCompact)
