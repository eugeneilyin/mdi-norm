import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHttp } from './FilledHttp'
import { OutlineHttp } from './OutlineHttp'
import { RoundHttp } from './RoundHttp'
import { SharpHttp } from './SharpHttp'
import { TwoToneHttp } from './TwoToneHttp'

export const Http = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHttp, OutlineHttp, RoundHttp, SharpHttp, TwoToneHttp)
