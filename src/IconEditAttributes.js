import { createThemedIcon } from './utils/createThemedIcon'
import { IconEditAttributesFilled } from './IconEditAttributesFilled'
import { IconEditAttributesOutlined } from './IconEditAttributesOutlined'
import { IconEditAttributesRounded } from './IconEditAttributesRounded'
import { IconEditAttributesSharp } from './IconEditAttributesSharp'
import { IconEditAttributesTwoTone } from './IconEditAttributesTwoTone'

export const IconEditAttributes = /*#__PURE__*/ props =>
  createThemedIcon(props, IconEditAttributesFilled, IconEditAttributesOutlined, IconEditAttributesRounded, IconEditAttributesSharp, IconEditAttributesTwoTone)
