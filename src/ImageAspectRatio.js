import { createThemedIcon } from './utils/createThemedIcon'
import { FilledImageAspectRatio } from './FilledImageAspectRatio'
import { OutlineImageAspectRatio } from './OutlineImageAspectRatio'
import { RoundImageAspectRatio } from './RoundImageAspectRatio'
import { SharpImageAspectRatio } from './SharpImageAspectRatio'
import { TwoToneImageAspectRatio } from './TwoToneImageAspectRatio'

export const ImageAspectRatio = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledImageAspectRatio, OutlineImageAspectRatio, RoundImageAspectRatio, SharpImageAspectRatio, TwoToneImageAspectRatio)
