import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRssFeed } from './FilledRssFeed'
import { OutlineRssFeed } from './OutlineRssFeed'
import { RoundRssFeed } from './RoundRssFeed'
import { SharpRssFeed } from './SharpRssFeed'
import { TwoToneRssFeed } from './TwoToneRssFeed'

export const RssFeed = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRssFeed, OutlineRssFeed, RoundRssFeed, SharpRssFeed, TwoToneRssFeed)
