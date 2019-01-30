import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhotoSizeSelectSmall } from './FilledPhotoSizeSelectSmall'
import { OutlinePhotoSizeSelectSmall } from './OutlinePhotoSizeSelectSmall'
import { RoundPhotoSizeSelectSmall } from './RoundPhotoSizeSelectSmall'
import { SharpPhotoSizeSelectSmall } from './SharpPhotoSizeSelectSmall'
import { TwoTonePhotoSizeSelectSmall } from './TwoTonePhotoSizeSelectSmall'

export const PhotoSizeSelectSmall = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhotoSizeSelectSmall, OutlinePhotoSizeSelectSmall, RoundPhotoSizeSelectSmall, SharpPhotoSizeSelectSmall, TwoTonePhotoSizeSelectSmall)
