import { createThemedIcon } from './utils/createThemedIcon'
import { IconSortByAlphaFilled } from './IconSortByAlphaFilled'
import { IconSortByAlphaOutlined } from './IconSortByAlphaOutlined'
import { IconSortByAlphaRounded } from './IconSortByAlphaRounded'
import { IconSortByAlphaSharp } from './IconSortByAlphaSharp'
import { IconSortByAlphaTwoTone } from './IconSortByAlphaTwoTone'

export const IconSortByAlpha = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSortByAlphaFilled, IconSortByAlphaOutlined, IconSortByAlphaRounded, IconSortByAlphaSharp, IconSortByAlphaTwoTone)
