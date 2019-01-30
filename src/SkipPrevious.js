import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSkipPrevious } from './FilledSkipPrevious'
import { OutlineSkipPrevious } from './OutlineSkipPrevious'
import { RoundSkipPrevious } from './RoundSkipPrevious'
import { SharpSkipPrevious } from './SharpSkipPrevious'
import { TwoToneSkipPrevious } from './TwoToneSkipPrevious'

export const SkipPrevious = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSkipPrevious, OutlineSkipPrevious, RoundSkipPrevious, SharpSkipPrevious, TwoToneSkipPrevious)
