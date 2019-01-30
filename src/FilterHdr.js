import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFilterHdr } from './FilledFilterHdr'
import { OutlineFilterHdr } from './OutlineFilterHdr'
import { RoundFilterHdr } from './RoundFilterHdr'
import { SharpFilterHdr } from './SharpFilterHdr'
import { TwoToneFilterHdr } from './TwoToneFilterHdr'

export const FilterHdr = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFilterHdr, OutlineFilterHdr, RoundFilterHdr, SharpFilterHdr, TwoToneFilterHdr)
