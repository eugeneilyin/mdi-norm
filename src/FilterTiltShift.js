import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFilterTiltShift } from './FilledFilterTiltShift'
import { OutlineFilterTiltShift } from './OutlineFilterTiltShift'
import { RoundFilterTiltShift } from './RoundFilterTiltShift'
import { SharpFilterTiltShift } from './SharpFilterTiltShift'
import { TwoToneFilterTiltShift } from './TwoToneFilterTiltShift'

export const FilterTiltShift = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFilterTiltShift, OutlineFilterTiltShift, RoundFilterTiltShift, SharpFilterTiltShift, TwoToneFilterTiltShift)
