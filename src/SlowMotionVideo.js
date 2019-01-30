import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSlowMotionVideo } from './FilledSlowMotionVideo'
import { OutlineSlowMotionVideo } from './OutlineSlowMotionVideo'
import { RoundSlowMotionVideo } from './RoundSlowMotionVideo'
import { SharpSlowMotionVideo } from './SharpSlowMotionVideo'
import { TwoToneSlowMotionVideo } from './TwoToneSlowMotionVideo'

export const SlowMotionVideo = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSlowMotionVideo, OutlineSlowMotionVideo, RoundSlowMotionVideo, SharpSlowMotionVideo, TwoToneSlowMotionVideo)
