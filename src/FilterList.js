import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFilterList } from './FilledFilterList'
import { OutlineFilterList } from './OutlineFilterList'
import { RoundFilterList } from './RoundFilterList'
import { SharpFilterList } from './SharpFilterList'
import { TwoToneFilterList } from './TwoToneFilterList'

export const FilterList = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFilterList, OutlineFilterList, RoundFilterList, SharpFilterList, TwoToneFilterList)
