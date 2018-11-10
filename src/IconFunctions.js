import { createThemedIcon } from './utils/createThemedIcon'
import { IconFunctionsFilled } from './IconFunctionsFilled'
import { IconFunctionsOutlined } from './IconFunctionsOutlined'
import { IconFunctionsRounded } from './IconFunctionsRounded'
import { IconFunctionsSharp } from './IconFunctionsSharp'
import { IconFunctionsTwoTone } from './IconFunctionsTwoTone'

export const IconFunctions = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFunctionsFilled, IconFunctionsOutlined, IconFunctionsRounded, IconFunctionsSharp, IconFunctionsTwoTone)
