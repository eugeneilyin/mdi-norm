import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPublic } from './FilledPublic'
import { OutlinePublic } from './OutlinePublic'
import { RoundPublic } from './RoundPublic'
import { SharpPublic } from './SharpPublic'
import { TwoTonePublic } from './TwoTonePublic'

export const Public = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPublic, OutlinePublic, RoundPublic, SharpPublic, TwoTonePublic)
