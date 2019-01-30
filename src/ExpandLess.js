import { createThemedIcon } from './utils/createThemedIcon'
import { FilledExpandLess } from './FilledExpandLess'
import { OutlineExpandLess } from './OutlineExpandLess'
import { RoundExpandLess } from './RoundExpandLess'
import { SharpExpandLess } from './SharpExpandLess'
import { TwoToneExpandLess } from './TwoToneExpandLess'

export const ExpandLess = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledExpandLess, OutlineExpandLess, RoundExpandLess, SharpExpandLess, TwoToneExpandLess)
