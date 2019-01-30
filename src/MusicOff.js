import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMusicOff } from './FilledMusicOff'
import { OutlineMusicOff } from './OutlineMusicOff'
import { RoundMusicOff } from './RoundMusicOff'
import { SharpMusicOff } from './SharpMusicOff'
import { TwoToneMusicOff } from './TwoToneMusicOff'

export const MusicOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMusicOff, OutlineMusicOff, RoundMusicOff, SharpMusicOff, TwoToneMusicOff)
