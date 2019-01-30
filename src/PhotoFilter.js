import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhotoFilter } from './FilledPhotoFilter'
import { OutlinePhotoFilter } from './OutlinePhotoFilter'
import { RoundPhotoFilter } from './RoundPhotoFilter'
import { SharpPhotoFilter } from './SharpPhotoFilter'
import { TwoTonePhotoFilter } from './TwoTonePhotoFilter'

export const PhotoFilter = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhotoFilter, OutlinePhotoFilter, RoundPhotoFilter, SharpPhotoFilter, TwoTonePhotoFilter)
