import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSubtitles } from './FilledSubtitles'
import { OutlineSubtitles } from './OutlineSubtitles'
import { RoundSubtitles } from './RoundSubtitles'
import { SharpSubtitles } from './SharpSubtitles'
import { TwoToneSubtitles } from './TwoToneSubtitles'

export const Subtitles = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSubtitles, OutlineSubtitles, RoundSubtitles, SharpSubtitles, TwoToneSubtitles)
