import { createThemedIcon } from './utils/createThemedIcon'
import { IconBackspaceFilled } from './IconBackspaceFilled'
import { IconBackspaceOutlined } from './IconBackspaceOutlined'
import { IconBackspaceRounded } from './IconBackspaceRounded'
import { IconBackspaceSharp } from './IconBackspaceSharp'
import { IconBackspaceTwoTone } from './IconBackspaceTwoTone'

export const IconBackspace = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBackspaceFilled, IconBackspaceOutlined, IconBackspaceRounded, IconBackspaceSharp, IconBackspaceTwoTone)
