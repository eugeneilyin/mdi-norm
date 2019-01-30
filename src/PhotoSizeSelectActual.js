import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhotoSizeSelectActual } from './FilledPhotoSizeSelectActual'
import { OutlinePhotoSizeSelectActual } from './OutlinePhotoSizeSelectActual'
import { RoundPhotoSizeSelectActual } from './RoundPhotoSizeSelectActual'
import { SharpPhotoSizeSelectActual } from './SharpPhotoSizeSelectActual'
import { TwoTonePhotoSizeSelectActual } from './TwoTonePhotoSizeSelectActual'

export const PhotoSizeSelectActual = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhotoSizeSelectActual, OutlinePhotoSizeSelectActual, RoundPhotoSizeSelectActual, SharpPhotoSizeSelectActual, TwoTonePhotoSizeSelectActual)
