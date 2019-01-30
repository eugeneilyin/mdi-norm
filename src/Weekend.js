import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWeekend } from './FilledWeekend'
import { OutlineWeekend } from './OutlineWeekend'
import { RoundWeekend } from './RoundWeekend'
import { SharpWeekend } from './SharpWeekend'
import { TwoToneWeekend } from './TwoToneWeekend'

export const Weekend = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWeekend, OutlineWeekend, RoundWeekend, SharpWeekend, TwoToneWeekend)
