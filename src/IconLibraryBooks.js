import { createThemedIcon } from './utils/createThemedIcon'
import { IconLibraryBooksFilled } from './IconLibraryBooksFilled'
import { IconLibraryBooksOutlined } from './IconLibraryBooksOutlined'
import { IconLibraryBooksRounded } from './IconLibraryBooksRounded'
import { IconLibraryBooksSharp } from './IconLibraryBooksSharp'
import { IconLibraryBooksTwoTone } from './IconLibraryBooksTwoTone'

export const IconLibraryBooks = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLibraryBooksFilled, IconLibraryBooksOutlined, IconLibraryBooksRounded, IconLibraryBooksSharp, IconLibraryBooksTwoTone)
