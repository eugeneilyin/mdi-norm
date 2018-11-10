import { createThemedIcon } from './utils/createThemedIcon'
import { IconVideoLabelFilled } from './IconVideoLabelFilled'
import { IconVideoLabelOutlined } from './IconVideoLabelOutlined'
import { IconVideoLabelRounded } from './IconVideoLabelRounded'
import { IconVideoLabelSharp } from './IconVideoLabelSharp'
import { IconVideoLabelTwoTone } from './IconVideoLabelTwoTone'

export const IconVideoLabel = /*#__PURE__*/ props =>
  createThemedIcon(props, IconVideoLabelFilled, IconVideoLabelOutlined, IconVideoLabelRounded, IconVideoLabelSharp, IconVideoLabelTwoTone)
