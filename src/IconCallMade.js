import { createThemedIcon } from './utils/createThemedIcon'
import { IconCallMadeFilled } from './IconCallMadeFilled'
import { IconCallMadeOutlined } from './IconCallMadeOutlined'
import { IconCallMadeRounded } from './IconCallMadeRounded'
import { IconCallMadeSharp } from './IconCallMadeSharp'
import { IconCallMadeTwoTone } from './IconCallMadeTwoTone'

export const IconCallMade = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCallMadeFilled, IconCallMadeOutlined, IconCallMadeRounded, IconCallMadeSharp, IconCallMadeTwoTone)
