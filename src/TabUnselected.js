import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTabUnselected } from './FilledTabUnselected'
import { OutlineTabUnselected } from './OutlineTabUnselected'
import { RoundTabUnselected } from './RoundTabUnselected'
import { SharpTabUnselected } from './SharpTabUnselected'
import { TwoToneTabUnselected } from './TwoToneTabUnselected'

export const TabUnselected = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTabUnselected, OutlineTabUnselected, RoundTabUnselected, SharpTabUnselected, TwoToneTabUnselected)
