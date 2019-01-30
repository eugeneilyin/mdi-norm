import { createThemedIcon } from './utils/createThemedIcon'
import { FilledExpandMore } from './FilledExpandMore'
import { OutlineExpandMore } from './OutlineExpandMore'
import { RoundExpandMore } from './RoundExpandMore'
import { SharpExpandMore } from './SharpExpandMore'
import { TwoToneExpandMore } from './TwoToneExpandMore'

export const ExpandMore = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledExpandMore, OutlineExpandMore, RoundExpandMore, SharpExpandMore, TwoToneExpandMore)
