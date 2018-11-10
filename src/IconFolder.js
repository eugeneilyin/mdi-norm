import { createThemedIcon } from './utils/createThemedIcon'
import { IconFolderFilled } from './IconFolderFilled'
import { IconFolderOutlined } from './IconFolderOutlined'
import { IconFolderRounded } from './IconFolderRounded'
import { IconFolderSharp } from './IconFolderSharp'
import { IconFolderTwoTone } from './IconFolderTwoTone'

export const IconFolder = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFolderFilled, IconFolderOutlined, IconFolderRounded, IconFolderSharp, IconFolderTwoTone)
