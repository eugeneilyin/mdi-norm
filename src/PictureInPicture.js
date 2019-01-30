import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPictureInPicture } from './FilledPictureInPicture'
import { OutlinePictureInPicture } from './OutlinePictureInPicture'
import { RoundPictureInPicture } from './RoundPictureInPicture'
import { SharpPictureInPicture } from './SharpPictureInPicture'
import { TwoTonePictureInPicture } from './TwoTonePictureInPicture'

export const PictureInPicture = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPictureInPicture, OutlinePictureInPicture, RoundPictureInPicture, SharpPictureInPicture, TwoTonePictureInPicture)
