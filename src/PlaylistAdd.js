import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPlaylistAdd } from './FilledPlaylistAdd'
import { OutlinePlaylistAdd } from './OutlinePlaylistAdd'
import { RoundPlaylistAdd } from './RoundPlaylistAdd'
import { SharpPlaylistAdd } from './SharpPlaylistAdd'
import { TwoTonePlaylistAdd } from './TwoTonePlaylistAdd'

export const PlaylistAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPlaylistAdd, OutlinePlaylistAdd, RoundPlaylistAdd, SharpPlaylistAdd, TwoTonePlaylistAdd)
