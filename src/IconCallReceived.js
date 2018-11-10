import { createThemedIcon } from './utils/createThemedIcon'
import { IconCallReceivedFilled } from './IconCallReceivedFilled'
import { IconCallReceivedOutlined } from './IconCallReceivedOutlined'
import { IconCallReceivedRounded } from './IconCallReceivedRounded'
import { IconCallReceivedSharp } from './IconCallReceivedSharp'
import { IconCallReceivedTwoTone } from './IconCallReceivedTwoTone'

export const IconCallReceived = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCallReceivedFilled, IconCallReceivedOutlined, IconCallReceivedRounded, IconCallReceivedSharp, IconCallReceivedTwoTone)
