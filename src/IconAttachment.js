import { createThemedIcon } from './utils/createThemedIcon'
import { IconAttachmentFilled } from './IconAttachmentFilled'
import { IconAttachmentOutlined } from './IconAttachmentOutlined'
import { IconAttachmentRounded } from './IconAttachmentRounded'
import { IconAttachmentSharp } from './IconAttachmentSharp'
import { IconAttachmentTwoTone } from './IconAttachmentTwoTone'

export const IconAttachment = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAttachmentFilled, IconAttachmentOutlined, IconAttachmentRounded, IconAttachmentSharp, IconAttachmentTwoTone)
