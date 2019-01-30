import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPictureInPictureAlt } from './FilledPictureInPictureAlt'
import { OutlinePictureInPictureAlt } from './OutlinePictureInPictureAlt'
import { RoundPictureInPictureAlt } from './RoundPictureInPictureAlt'
import { SharpPictureInPictureAlt } from './SharpPictureInPictureAlt'
import { TwoTonePictureInPictureAlt } from './TwoTonePictureInPictureAlt'

export const PictureInPictureAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPictureInPictureAlt, OutlinePictureInPictureAlt, RoundPictureInPictureAlt, SharpPictureInPictureAlt, TwoTonePictureInPictureAlt)
