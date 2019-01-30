import { createThemedIcon } from './utils/createThemedIcon'
import { FilledYoutubeSearchedFor } from './FilledYoutubeSearchedFor'
import { OutlineYoutubeSearchedFor } from './OutlineYoutubeSearchedFor'
import { RoundYoutubeSearchedFor } from './RoundYoutubeSearchedFor'
import { SharpYoutubeSearchedFor } from './SharpYoutubeSearchedFor'
import { TwoToneYoutubeSearchedFor } from './TwoToneYoutubeSearchedFor'

export const YoutubeSearchedFor = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledYoutubeSearchedFor, OutlineYoutubeSearchedFor, RoundYoutubeSearchedFor, SharpYoutubeSearchedFor, TwoToneYoutubeSearchedFor)
