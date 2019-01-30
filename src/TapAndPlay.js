import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTapAndPlay } from './FilledTapAndPlay'
import { OutlineTapAndPlay } from './OutlineTapAndPlay'
import { RoundTapAndPlay } from './RoundTapAndPlay'
import { SharpTapAndPlay } from './SharpTapAndPlay'
import { TwoToneTapAndPlay } from './TwoToneTapAndPlay'

export const TapAndPlay = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTapAndPlay, OutlineTapAndPlay, RoundTapAndPlay, SharpTapAndPlay, TwoToneTapAndPlay)
