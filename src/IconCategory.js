import { createThemedIcon } from './utils/createThemedIcon'
import { IconCategoryFilled } from './IconCategoryFilled'
import { IconCategoryOutlined } from './IconCategoryOutlined'
import { IconCategoryRounded } from './IconCategoryRounded'
import { IconCategorySharp } from './IconCategorySharp'
import { IconCategoryTwoTone } from './IconCategoryTwoTone'

export const IconCategory = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCategoryFilled, IconCategoryOutlined, IconCategoryRounded, IconCategorySharp, IconCategoryTwoTone)
