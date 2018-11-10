import { createThemedIcon } from './utils/createThemedIcon'
import { IconSaveFilled } from './IconSaveFilled'
import { IconSaveOutlined } from './IconSaveOutlined'
import { IconSaveRounded } from './IconSaveRounded'
import { IconSaveSharp } from './IconSaveSharp'
import { IconSaveTwoTone } from './IconSaveTwoTone'

export const IconSave = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSaveFilled, IconSaveOutlined, IconSaveRounded, IconSaveSharp, IconSaveTwoTone)
