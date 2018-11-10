import { createThemedIcon } from './utils/createThemedIcon'
import { IconZoomInFilled } from './IconZoomInFilled'
import { IconZoomInOutlined } from './IconZoomInOutlined'
import { IconZoomInRounded } from './IconZoomInRounded'
import { IconZoomInSharp } from './IconZoomInSharp'
import { IconZoomInTwoTone } from './IconZoomInTwoTone'

export const IconZoomIn = /*#__PURE__*/ props =>
  createThemedIcon(props, IconZoomInFilled, IconZoomInOutlined, IconZoomInRounded, IconZoomInSharp, IconZoomInTwoTone)
