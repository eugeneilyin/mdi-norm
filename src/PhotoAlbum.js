import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhotoAlbum } from './FilledPhotoAlbum'
import { OutlinePhotoAlbum } from './OutlinePhotoAlbum'
import { RoundPhotoAlbum } from './RoundPhotoAlbum'
import { SharpPhotoAlbum } from './SharpPhotoAlbum'
import { TwoTonePhotoAlbum } from './TwoTonePhotoAlbum'

export const PhotoAlbum = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhotoAlbum, OutlinePhotoAlbum, RoundPhotoAlbum, SharpPhotoAlbum, TwoTonePhotoAlbum)
