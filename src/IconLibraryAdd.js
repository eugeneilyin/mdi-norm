import { createThemedIcon } from './utils/createThemedIcon'
import { IconLibraryAddFilled } from './IconLibraryAddFilled'
import { IconLibraryAddOutlined } from './IconLibraryAddOutlined'
import { IconLibraryAddRounded } from './IconLibraryAddRounded'
import { IconLibraryAddSharp } from './IconLibraryAddSharp'
import { IconLibraryAddTwoTone } from './IconLibraryAddTwoTone'

export const IconLibraryAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLibraryAddFilled, IconLibraryAddOutlined, IconLibraryAddRounded, IconLibraryAddSharp, IconLibraryAddTwoTone)
