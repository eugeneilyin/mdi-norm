import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPictureAsPdf } from './FilledPictureAsPdf'
import { OutlinePictureAsPdf } from './OutlinePictureAsPdf'
import { RoundPictureAsPdf } from './RoundPictureAsPdf'
import { SharpPictureAsPdf } from './SharpPictureAsPdf'
import { TwoTonePictureAsPdf } from './TwoTonePictureAsPdf'

export const PictureAsPdf = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPictureAsPdf, OutlinePictureAsPdf, RoundPictureAsPdf, SharpPictureAsPdf, TwoTonePictureAsPdf)
