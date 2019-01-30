import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHourglassEmpty } from './FilledHourglassEmpty'
import { OutlineHourglassEmpty } from './OutlineHourglassEmpty'
import { RoundHourglassEmpty } from './RoundHourglassEmpty'
import { SharpHourglassEmpty } from './SharpHourglassEmpty'
import { TwoToneHourglassEmpty } from './TwoToneHourglassEmpty'

export const HourglassEmpty = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHourglassEmpty, OutlineHourglassEmpty, RoundHourglassEmpty, SharpHourglassEmpty, TwoToneHourglassEmpty)
