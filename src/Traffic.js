import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTraffic } from './FilledTraffic'
import { OutlineTraffic } from './OutlineTraffic'
import { RoundTraffic } from './RoundTraffic'
import { SharpTraffic } from './SharpTraffic'
import { TwoToneTraffic } from './TwoToneTraffic'

export const Traffic = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTraffic, OutlineTraffic, RoundTraffic, SharpTraffic, TwoToneTraffic)
