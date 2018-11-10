import { createThemedIcon } from './utils/createThemedIcon'
import { IconTextsmsFilled } from './IconTextsmsFilled'
import { IconTextsmsOutlined } from './IconTextsmsOutlined'
import { IconTextsmsRounded } from './IconTextsmsRounded'
import { IconTextsmsSharp } from './IconTextsmsSharp'
import { IconTextsmsTwoTone } from './IconTextsmsTwoTone'

export const IconTextsms = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTextsmsFilled, IconTextsmsOutlined, IconTextsmsRounded, IconTextsmsSharp, IconTextsmsTwoTone)
