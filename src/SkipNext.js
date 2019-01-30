import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSkipNext } from './FilledSkipNext'
import { OutlineSkipNext } from './OutlineSkipNext'
import { RoundSkipNext } from './RoundSkipNext'
import { SharpSkipNext } from './SharpSkipNext'
import { TwoToneSkipNext } from './TwoToneSkipNext'

export const SkipNext = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSkipNext, OutlineSkipNext, RoundSkipNext, SharpSkipNext, TwoToneSkipNext)
