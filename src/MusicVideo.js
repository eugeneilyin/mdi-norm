import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMusicVideo } from './FilledMusicVideo'
import { OutlineMusicVideo } from './OutlineMusicVideo'
import { RoundMusicVideo } from './RoundMusicVideo'
import { SharpMusicVideo } from './SharpMusicVideo'
import { TwoToneMusicVideo } from './TwoToneMusicVideo'

export const MusicVideo = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMusicVideo, OutlineMusicVideo, RoundMusicVideo, SharpMusicVideo, TwoToneMusicVideo)
