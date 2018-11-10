import { createThemedIcon } from './utils/createThemedIcon'
import { IconAttachFileFilled } from './IconAttachFileFilled'
import { IconAttachFileOutlined } from './IconAttachFileOutlined'
import { IconAttachFileRounded } from './IconAttachFileRounded'
import { IconAttachFileSharp } from './IconAttachFileSharp'
import { IconAttachFileTwoTone } from './IconAttachFileTwoTone'

export const IconAttachFile = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAttachFileFilled, IconAttachFileOutlined, IconAttachFileRounded, IconAttachFileSharp, IconAttachFileTwoTone)
