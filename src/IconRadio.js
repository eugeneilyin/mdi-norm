import { createThemedIcon } from './utils/createThemedIcon'
import { IconRadioFilled } from './IconRadioFilled'
import { IconRadioOutlined } from './IconRadioOutlined'
import { IconRadioRounded } from './IconRadioRounded'
import { IconRadioSharp } from './IconRadioSharp'
import { IconRadioTwoTone } from './IconRadioTwoTone'

export const IconRadio = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRadioFilled, IconRadioOutlined, IconRadioRounded, IconRadioSharp, IconRadioTwoTone)
