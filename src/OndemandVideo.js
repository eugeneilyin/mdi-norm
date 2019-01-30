import { createThemedIcon } from './utils/createThemedIcon'
import { FilledOndemandVideo } from './FilledOndemandVideo'
import { OutlineOndemandVideo } from './OutlineOndemandVideo'
import { RoundOndemandVideo } from './RoundOndemandVideo'
import { SharpOndemandVideo } from './SharpOndemandVideo'
import { TwoToneOndemandVideo } from './TwoToneOndemandVideo'

export const OndemandVideo = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledOndemandVideo, OutlineOndemandVideo, RoundOndemandVideo, SharpOndemandVideo, TwoToneOndemandVideo)
