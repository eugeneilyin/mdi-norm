import { createThemedIcon } from './utils/createThemedIcon'
import { IconTextureFilled } from './IconTextureFilled'
import { IconTextureOutlined } from './IconTextureOutlined'
import { IconTextureRounded } from './IconTextureRounded'
import { IconTextureSharp } from './IconTextureSharp'
import { IconTextureTwoTone } from './IconTextureTwoTone'

export const IconTexture = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTextureFilled, IconTextureOutlined, IconTextureRounded, IconTextureSharp, IconTextureTwoTone)
