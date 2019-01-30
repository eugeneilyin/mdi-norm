import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSelectAll } from './FilledSelectAll'
import { OutlineSelectAll } from './OutlineSelectAll'
import { RoundSelectAll } from './RoundSelectAll'
import { SharpSelectAll } from './SharpSelectAll'
import { TwoToneSelectAll } from './TwoToneSelectAll'

export const SelectAll = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSelectAll, OutlineSelectAll, RoundSelectAll, SharpSelectAll, TwoToneSelectAll)
