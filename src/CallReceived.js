import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCallReceived } from './FilledCallReceived'
import { OutlineCallReceived } from './OutlineCallReceived'
import { RoundCallReceived } from './RoundCallReceived'
import { SharpCallReceived } from './SharpCallReceived'
import { TwoToneCallReceived } from './TwoToneCallReceived'

export const CallReceived = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCallReceived, OutlineCallReceived, RoundCallReceived, SharpCallReceived, TwoToneCallReceived)
