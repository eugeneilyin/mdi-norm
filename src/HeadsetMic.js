import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHeadsetMic } from './FilledHeadsetMic'
import { OutlineHeadsetMic } from './OutlineHeadsetMic'
import { RoundHeadsetMic } from './RoundHeadsetMic'
import { SharpHeadsetMic } from './SharpHeadsetMic'
import { TwoToneHeadsetMic } from './TwoToneHeadsetMic'

export const HeadsetMic = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHeadsetMic, OutlineHeadsetMic, RoundHeadsetMic, SharpHeadsetMic, TwoToneHeadsetMic)
