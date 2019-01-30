import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCamera } from './FilledCamera'
import { OutlineCamera } from './OutlineCamera'
import { RoundCamera } from './RoundCamera'
import { SharpCamera } from './SharpCamera'
import { TwoToneCamera } from './TwoToneCamera'

export const Camera = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCamera, OutlineCamera, RoundCamera, SharpCamera, TwoToneCamera)
