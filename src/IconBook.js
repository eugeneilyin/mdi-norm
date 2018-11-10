import { createThemedIcon } from './utils/createThemedIcon'
import { IconBookFilled } from './IconBookFilled'
import { IconBookOutlined } from './IconBookOutlined'
import { IconBookRounded } from './IconBookRounded'
import { IconBookSharp } from './IconBookSharp'
import { IconBookTwoTone } from './IconBookTwoTone'

export const IconBook = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBookFilled, IconBookOutlined, IconBookRounded, IconBookSharp, IconBookTwoTone)
