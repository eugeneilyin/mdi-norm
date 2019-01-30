import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTablet } from './FilledTablet'
import { OutlineTablet } from './OutlineTablet'
import { RoundTablet } from './RoundTablet'
import { SharpTablet } from './SharpTablet'
import { TwoToneTablet } from './TwoToneTablet'

export const Tablet = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTablet, OutlineTablet, RoundTablet, SharpTablet, TwoToneTablet)
