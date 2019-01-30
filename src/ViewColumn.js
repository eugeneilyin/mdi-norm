import { createThemedIcon } from './utils/createThemedIcon'
import { FilledViewColumn } from './FilledViewColumn'
import { OutlineViewColumn } from './OutlineViewColumn'
import { RoundViewColumn } from './RoundViewColumn'
import { SharpViewColumn } from './SharpViewColumn'
import { TwoToneViewColumn } from './TwoToneViewColumn'

export const ViewColumn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledViewColumn, OutlineViewColumn, RoundViewColumn, SharpViewColumn, TwoToneViewColumn)
