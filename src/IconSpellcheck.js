import { createThemedIcon } from './utils/createThemedIcon'
import { IconSpellcheckFilled } from './IconSpellcheckFilled'
import { IconSpellcheckOutlined } from './IconSpellcheckOutlined'
import { IconSpellcheckRounded } from './IconSpellcheckRounded'
import { IconSpellcheckSharp } from './IconSpellcheckSharp'
import { IconSpellcheckTwoTone } from './IconSpellcheckTwoTone'

export const IconSpellcheck = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSpellcheckFilled, IconSpellcheckOutlined, IconSpellcheckRounded, IconSpellcheckSharp, IconSpellcheckTwoTone)
