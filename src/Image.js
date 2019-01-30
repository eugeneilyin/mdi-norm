import { createThemedIcon } from './utils/createThemedIcon'
import { FilledImage } from './FilledImage'
import { OutlineImage } from './OutlineImage'
import { RoundImage } from './RoundImage'
import { SharpImage } from './SharpImage'
import { TwoToneImage } from './TwoToneImage'

export const Image = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledImage, OutlineImage, RoundImage, SharpImage, TwoToneImage)
