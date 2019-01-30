import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRestorePage } from './FilledRestorePage'
import { OutlineRestorePage } from './OutlineRestorePage'
import { RoundRestorePage } from './RoundRestorePage'
import { SharpRestorePage } from './SharpRestorePage'
import { TwoToneRestorePage } from './TwoToneRestorePage'

export const RestorePage = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRestorePage, OutlineRestorePage, RoundRestorePage, SharpRestorePage, TwoToneRestorePage)
