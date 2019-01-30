import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhotoSizeSelectLarge } from './FilledPhotoSizeSelectLarge'
import { OutlinePhotoSizeSelectLarge } from './OutlinePhotoSizeSelectLarge'
import { RoundPhotoSizeSelectLarge } from './RoundPhotoSizeSelectLarge'
import { SharpPhotoSizeSelectLarge } from './SharpPhotoSizeSelectLarge'
import { TwoTonePhotoSizeSelectLarge } from './TwoTonePhotoSizeSelectLarge'

export const PhotoSizeSelectLarge = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhotoSizeSelectLarge, OutlinePhotoSizeSelectLarge, RoundPhotoSizeSelectLarge, SharpPhotoSizeSelectLarge, TwoTonePhotoSizeSelectLarge)
