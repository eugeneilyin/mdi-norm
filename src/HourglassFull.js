import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHourglassFull } from './FilledHourglassFull'
import { OutlineHourglassFull } from './OutlineHourglassFull'
import { RoundHourglassFull } from './RoundHourglassFull'
import { SharpHourglassFull } from './SharpHourglassFull'
import { TwoToneHourglassFull } from './TwoToneHourglassFull'

export const HourglassFull = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHourglassFull, OutlineHourglassFull, RoundHourglassFull, SharpHourglassFull, TwoToneHourglassFull)
