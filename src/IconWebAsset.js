import { createThemedIcon } from './utils/createThemedIcon'
import { IconWebAssetFilled } from './IconWebAssetFilled'
import { IconWebAssetOutlined } from './IconWebAssetOutlined'
import { IconWebAssetRounded } from './IconWebAssetRounded'
import { IconWebAssetSharp } from './IconWebAssetSharp'
import { IconWebAssetTwoTone } from './IconWebAssetTwoTone'

export const IconWebAsset = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWebAssetFilled, IconWebAssetOutlined, IconWebAssetRounded, IconWebAssetSharp, IconWebAssetTwoTone)
