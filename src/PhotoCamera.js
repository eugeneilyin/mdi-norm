import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhotoCamera } from './FilledPhotoCamera'
import { OutlinePhotoCamera } from './OutlinePhotoCamera'
import { RoundPhotoCamera } from './RoundPhotoCamera'
import { SharpPhotoCamera } from './SharpPhotoCamera'
import { TwoTonePhotoCamera } from './TwoTonePhotoCamera'

export const PhotoCamera = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhotoCamera, OutlinePhotoCamera, RoundPhotoCamera, SharpPhotoCamera, TwoTonePhotoCamera)
