import { createThemedIcon } from './utils/createThemedIcon'
import { FilledViewList } from './FilledViewList'
import { OutlineViewList } from './OutlineViewList'
import { RoundViewList } from './RoundViewList'
import { SharpViewList } from './SharpViewList'
import { TwoToneViewList } from './TwoToneViewList'

export const ViewList = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledViewList, OutlineViewList, RoundViewList, SharpViewList, TwoToneViewList)
