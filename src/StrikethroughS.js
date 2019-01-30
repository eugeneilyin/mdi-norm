import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStrikethroughS } from './FilledStrikethroughS'
import { OutlineStrikethroughS } from './OutlineStrikethroughS'
import { RoundStrikethroughS } from './RoundStrikethroughS'
import { SharpStrikethroughS } from './SharpStrikethroughS'
import { TwoToneStrikethroughS } from './TwoToneStrikethroughS'

export const StrikethroughS = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStrikethroughS, OutlineStrikethroughS, RoundStrikethroughS, SharpStrikethroughS, TwoToneStrikethroughS)
