import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStopScreenShare } from './FilledStopScreenShare'
import { OutlineStopScreenShare } from './OutlineStopScreenShare'
import { RoundStopScreenShare } from './RoundStopScreenShare'
import { SharpStopScreenShare } from './SharpStopScreenShare'
import { TwoToneStopScreenShare } from './TwoToneStopScreenShare'

export const StopScreenShare = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStopScreenShare, OutlineStopScreenShare, RoundStopScreenShare, SharpStopScreenShare, TwoToneStopScreenShare)
