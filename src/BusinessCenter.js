import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBusinessCenter } from './FilledBusinessCenter'
import { OutlineBusinessCenter } from './OutlineBusinessCenter'
import { RoundBusinessCenter } from './RoundBusinessCenter'
import { SharpBusinessCenter } from './SharpBusinessCenter'
import { TwoToneBusinessCenter } from './TwoToneBusinessCenter'

export const BusinessCenter = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBusinessCenter, OutlineBusinessCenter, RoundBusinessCenter, SharpBusinessCenter, TwoToneBusinessCenter)
