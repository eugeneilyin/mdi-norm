import { createThemedIcon } from './utils/createThemedIcon'
import { IconMergeTypeFilled } from './IconMergeTypeFilled'
import { IconMergeTypeOutlined } from './IconMergeTypeOutlined'
import { IconMergeTypeRounded } from './IconMergeTypeRounded'
import { IconMergeTypeSharp } from './IconMergeTypeSharp'
import { IconMergeTypeTwoTone } from './IconMergeTypeTwoTone'

export const IconMergeType = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMergeTypeFilled, IconMergeTypeOutlined, IconMergeTypeRounded, IconMergeTypeSharp, IconMergeTypeTwoTone)
