import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhotoLibrary } from './FilledPhotoLibrary'
import { OutlinePhotoLibrary } from './OutlinePhotoLibrary'
import { RoundPhotoLibrary } from './RoundPhotoLibrary'
import { SharpPhotoLibrary } from './SharpPhotoLibrary'
import { TwoTonePhotoLibrary } from './TwoTonePhotoLibrary'

export const PhotoLibrary = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhotoLibrary, OutlinePhotoLibrary, RoundPhotoLibrary, SharpPhotoLibrary, TwoTonePhotoLibrary)
