import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAlbum } from './FilledAlbum'
import { OutlineAlbum } from './OutlineAlbum'
import { RoundAlbum } from './RoundAlbum'
import { SharpAlbum } from './SharpAlbum'
import { TwoToneAlbum } from './TwoToneAlbum'

export const Album = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAlbum, OutlineAlbum, RoundAlbum, SharpAlbum, TwoToneAlbum)
