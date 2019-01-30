import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMusicNote } from './FilledMusicNote'
import { OutlineMusicNote } from './OutlineMusicNote'
import { RoundMusicNote } from './RoundMusicNote'
import { SharpMusicNote } from './SharpMusicNote'
import { TwoToneMusicNote } from './TwoToneMusicNote'

export const MusicNote = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMusicNote, OutlineMusicNote, RoundMusicNote, SharpMusicNote, TwoToneMusicNote)
