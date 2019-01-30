import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLinkedCamera } from './FilledLinkedCamera'
import { OutlineLinkedCamera } from './OutlineLinkedCamera'
import { RoundLinkedCamera } from './RoundLinkedCamera'
import { SharpLinkedCamera } from './SharpLinkedCamera'
import { TwoToneLinkedCamera } from './TwoToneLinkedCamera'

export const LinkedCamera = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLinkedCamera, OutlineLinkedCamera, RoundLinkedCamera, SharpLinkedCamera, TwoToneLinkedCamera)
