import { createThemedIcon } from './utils/createThemedIcon'
import { IconStorageFilled } from './IconStorageFilled'
import { IconStorageOutlined } from './IconStorageOutlined'
import { IconStorageRounded } from './IconStorageRounded'
import { IconStorageSharp } from './IconStorageSharp'
import { IconStorageTwoTone } from './IconStorageTwoTone'

export const IconStorage = /*#__PURE__*/ props =>
  createThemedIcon(props, IconStorageFilled, IconStorageOutlined, IconStorageRounded, IconStorageSharp, IconStorageTwoTone)
