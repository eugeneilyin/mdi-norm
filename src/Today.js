import { createThemedIcon } from './utils/createThemedIcon'
import { FilledToday } from './FilledToday'
import { OutlineToday } from './OutlineToday'
import { RoundToday } from './RoundToday'
import { SharpToday } from './SharpToday'
import { TwoToneToday } from './TwoToneToday'

export const Today = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledToday, OutlineToday, RoundToday, SharpToday, TwoToneToday)
