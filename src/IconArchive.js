import { createThemedIcon } from './utils/createThemedIcon'
import { IconArchiveFilled } from './IconArchiveFilled'
import { IconArchiveOutlined } from './IconArchiveOutlined'
import { IconArchiveRounded } from './IconArchiveRounded'
import { IconArchiveSharp } from './IconArchiveSharp'
import { IconArchiveTwoTone } from './IconArchiveTwoTone'

export const IconArchive = /*#__PURE__*/ props =>
  createThemedIcon(props, IconArchiveFilled, IconArchiveOutlined, IconArchiveRounded, IconArchiveSharp, IconArchiveTwoTone)
