import { createThemedIcon } from './utils/createThemedIcon'
import { FilledViewComfy } from './FilledViewComfy'
import { OutlineViewComfy } from './OutlineViewComfy'
import { RoundViewComfy } from './RoundViewComfy'
import { SharpViewComfy } from './SharpViewComfy'
import { TwoToneViewComfy } from './TwoToneViewComfy'

export const ViewComfy = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledViewComfy, OutlineViewComfy, RoundViewComfy, SharpViewComfy, TwoToneViewComfy)
