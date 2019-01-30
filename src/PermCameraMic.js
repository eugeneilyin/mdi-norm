import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPermCameraMic } from './FilledPermCameraMic'
import { OutlinePermCameraMic } from './OutlinePermCameraMic'
import { RoundPermCameraMic } from './RoundPermCameraMic'
import { SharpPermCameraMic } from './SharpPermCameraMic'
import { TwoTonePermCameraMic } from './TwoTonePermCameraMic'

export const PermCameraMic = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPermCameraMic, OutlinePermCameraMic, RoundPermCameraMic, SharpPermCameraMic, TwoTonePermCameraMic)
