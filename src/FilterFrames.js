import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFilterFrames } from './FilledFilterFrames'
import { OutlineFilterFrames } from './OutlineFilterFrames'
import { RoundFilterFrames } from './RoundFilterFrames'
import { SharpFilterFrames } from './SharpFilterFrames'
import { TwoToneFilterFrames } from './TwoToneFilterFrames'

export const FilterFrames = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFilterFrames, OutlineFilterFrames, RoundFilterFrames, SharpFilterFrames, TwoToneFilterFrames)
