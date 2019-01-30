import { createThemedIcon } from './utils/createThemedIcon'
import { FilledForum } from './FilledForum'
import { OutlineForum } from './OutlineForum'
import { RoundForum } from './RoundForum'
import { SharpForum } from './SharpForum'
import { TwoToneForum } from './TwoToneForum'

export const Forum = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledForum, OutlineForum, RoundForum, SharpForum, TwoToneForum)
