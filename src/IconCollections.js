import { createThemedIcon } from './utils/createThemedIcon'
import { IconCollectionsFilled } from './IconCollectionsFilled'
import { IconCollectionsOutlined } from './IconCollectionsOutlined'
import { IconCollectionsRounded } from './IconCollectionsRounded'
import { IconCollectionsSharp } from './IconCollectionsSharp'
import { IconCollectionsTwoTone } from './IconCollectionsTwoTone'

export const IconCollections = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCollectionsFilled, IconCollectionsOutlined, IconCollectionsRounded, IconCollectionsSharp, IconCollectionsTwoTone)
