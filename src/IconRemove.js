import { createThemedIcon } from './utils/createThemedIcon'
import { IconRemoveFilled } from './IconRemoveFilled'
import { IconRemoveOutlined } from './IconRemoveOutlined'
import { IconRemoveRounded } from './IconRemoveRounded'
import { IconRemoveSharp } from './IconRemoveSharp'
import { IconRemoveTwoTone } from './IconRemoveTwoTone'

export const IconRemove = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRemoveFilled, IconRemoveOutlined, IconRemoveRounded, IconRemoveSharp, IconRemoveTwoTone)
