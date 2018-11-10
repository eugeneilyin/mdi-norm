import { createThemedIcon } from './utils/createThemedIcon'
import { IconPortraitFilled } from './IconPortraitFilled'
import { IconPortraitOutlined } from './IconPortraitOutlined'
import { IconPortraitRounded } from './IconPortraitRounded'
import { IconPortraitSharp } from './IconPortraitSharp'
import { IconPortraitTwoTone } from './IconPortraitTwoTone'

export const IconPortrait = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPortraitFilled, IconPortraitOutlined, IconPortraitRounded, IconPortraitSharp, IconPortraitTwoTone)
