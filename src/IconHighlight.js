import { createThemedIcon } from './utils/createThemedIcon'
import { IconHighlightFilled } from './IconHighlightFilled'
import { IconHighlightOutlined } from './IconHighlightOutlined'
import { IconHighlightRounded } from './IconHighlightRounded'
import { IconHighlightSharp } from './IconHighlightSharp'
import { IconHighlightTwoTone } from './IconHighlightTwoTone'

export const IconHighlight = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHighlightFilled, IconHighlightOutlined, IconHighlightRounded, IconHighlightSharp, IconHighlightTwoTone)
