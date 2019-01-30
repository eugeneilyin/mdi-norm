import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAccessTime } from './FilledAccessTime'
import { OutlineAccessTime } from './OutlineAccessTime'
import { RoundAccessTime } from './RoundAccessTime'
import { SharpAccessTime } from './SharpAccessTime'
import { TwoToneAccessTime } from './TwoToneAccessTime'

export const AccessTime = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAccessTime, OutlineAccessTime, RoundAccessTime, SharpAccessTime, TwoToneAccessTime)
