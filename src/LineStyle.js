import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLineStyle } from './FilledLineStyle'
import { OutlineLineStyle } from './OutlineLineStyle'
import { RoundLineStyle } from './RoundLineStyle'
import { SharpLineStyle } from './SharpLineStyle'
import { TwoToneLineStyle } from './TwoToneLineStyle'

export const LineStyle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLineStyle, OutlineLineStyle, RoundLineStyle, SharpLineStyle, TwoToneLineStyle)
