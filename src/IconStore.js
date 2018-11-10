import { createThemedIcon } from './utils/createThemedIcon'
import { IconStoreFilled } from './IconStoreFilled'
import { IconStoreOutlined } from './IconStoreOutlined'
import { IconStoreRounded } from './IconStoreRounded'
import { IconStoreSharp } from './IconStoreSharp'
import { IconStoreTwoTone } from './IconStoreTwoTone'

export const IconStore = /*#__PURE__*/ props =>
  createThemedIcon(props, IconStoreFilled, IconStoreOutlined, IconStoreRounded, IconStoreSharp, IconStoreTwoTone)
