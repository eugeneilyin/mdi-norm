import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAutorenew } from './FilledAutorenew'
import { OutlineAutorenew } from './OutlineAutorenew'
import { RoundAutorenew } from './RoundAutorenew'
import { SharpAutorenew } from './SharpAutorenew'
import { TwoToneAutorenew } from './TwoToneAutorenew'

export const Autorenew = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAutorenew, OutlineAutorenew, RoundAutorenew, SharpAutorenew, TwoToneAutorenew)
