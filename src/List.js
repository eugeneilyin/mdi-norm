import { createThemedIcon } from './utils/createThemedIcon'
import { FilledList } from './FilledList'
import { OutlineList } from './OutlineList'
import { RoundList } from './RoundList'
import { SharpList } from './SharpList'
import { TwoToneList } from './TwoToneList'

export const List = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledList, OutlineList, RoundList, SharpList, TwoToneList)
