import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPlaylistAddCheck } from './FilledPlaylistAddCheck'
import { OutlinePlaylistAddCheck } from './OutlinePlaylistAddCheck'
import { RoundPlaylistAddCheck } from './RoundPlaylistAddCheck'
import { SharpPlaylistAddCheck } from './SharpPlaylistAddCheck'
import { TwoTonePlaylistAddCheck } from './TwoTonePlaylistAddCheck'

export const PlaylistAddCheck = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPlaylistAddCheck, OutlinePlaylistAddCheck, RoundPlaylistAddCheck, SharpPlaylistAddCheck, TwoTonePlaylistAddCheck)
