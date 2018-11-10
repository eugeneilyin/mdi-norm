import { createThemedIcon } from './utils/createThemedIcon'
import { IconTextFieldsFilled } from './IconTextFieldsFilled'
import { IconTextFieldsOutlined } from './IconTextFieldsOutlined'
import { IconTextFieldsRounded } from './IconTextFieldsRounded'
import { IconTextFieldsSharp } from './IconTextFieldsSharp'
import { IconTextFieldsTwoTone } from './IconTextFieldsTwoTone'

export const IconTextFields = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTextFieldsFilled, IconTextFieldsOutlined, IconTextFieldsRounded, IconTextFieldsSharp, IconTextFieldsTwoTone)
