import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHearing } from './FilledHearing'
import { OutlineHearing } from './OutlineHearing'
import { RoundHearing } from './RoundHearing'
import { SharpHearing } from './SharpHearing'
import { TwoToneHearing } from './TwoToneHearing'

export const Hearing = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHearing, OutlineHearing, RoundHearing, SharpHearing, TwoToneHearing)
