import { createThemedIcon } from './utils/createThemedIcon'
import { IconSwapCallsFilled } from './IconSwapCallsFilled'
import { IconSwapCallsOutlined } from './IconSwapCallsOutlined'
import { IconSwapCallsRounded } from './IconSwapCallsRounded'
import { IconSwapCallsSharp } from './IconSwapCallsSharp'
import { IconSwapCallsTwoTone } from './IconSwapCallsTwoTone'

export const IconSwapCalls = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSwapCallsFilled, IconSwapCallsOutlined, IconSwapCallsRounded, IconSwapCallsSharp, IconSwapCallsTwoTone)
