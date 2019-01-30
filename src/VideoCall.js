import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVideoCall } from './FilledVideoCall'
import { OutlineVideoCall } from './OutlineVideoCall'
import { RoundVideoCall } from './RoundVideoCall'
import { SharpVideoCall } from './SharpVideoCall'
import { TwoToneVideoCall } from './TwoToneVideoCall'

export const VideoCall = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVideoCall, OutlineVideoCall, RoundVideoCall, SharpVideoCall, TwoToneVideoCall)
