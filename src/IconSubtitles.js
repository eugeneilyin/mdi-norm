import { createThemedIcon } from './utils/createThemedIcon'
import { IconSubtitlesFilled } from './IconSubtitlesFilled'
import { IconSubtitlesOutlined } from './IconSubtitlesOutlined'
import { IconSubtitlesRounded } from './IconSubtitlesRounded'
import { IconSubtitlesSharp } from './IconSubtitlesSharp'
import { IconSubtitlesTwoTone } from './IconSubtitlesTwoTone'

export const IconSubtitles = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSubtitlesFilled, IconSubtitlesOutlined, IconSubtitlesRounded, IconSubtitlesSharp, IconSubtitlesTwoTone)
