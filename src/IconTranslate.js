import { createThemedIcon } from './utils/createThemedIcon'
import { IconTranslateFilled } from './IconTranslateFilled'
import { IconTranslateOutlined } from './IconTranslateOutlined'
import { IconTranslateRounded } from './IconTranslateRounded'
import { IconTranslateSharp } from './IconTranslateSharp'
import { IconTranslateTwoTone } from './IconTranslateTwoTone'

export const IconTranslate = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTranslateFilled, IconTranslateOutlined, IconTranslateRounded, IconTranslateSharp, IconTranslateTwoTone)
