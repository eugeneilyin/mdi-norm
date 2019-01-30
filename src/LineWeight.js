import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLineWeight } from './FilledLineWeight'
import { OutlineLineWeight } from './OutlineLineWeight'
import { RoundLineWeight } from './RoundLineWeight'
import { SharpLineWeight } from './SharpLineWeight'
import { TwoToneLineWeight } from './TwoToneLineWeight'

export const LineWeight = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLineWeight, OutlineLineWeight, RoundLineWeight, SharpLineWeight, TwoToneLineWeight)
