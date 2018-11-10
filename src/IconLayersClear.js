import { createThemedIcon } from './utils/createThemedIcon'
import { IconLayersClearFilled } from './IconLayersClearFilled'
import { IconLayersClearOutlined } from './IconLayersClearOutlined'
import { IconLayersClearRounded } from './IconLayersClearRounded'
import { IconLayersClearSharp } from './IconLayersClearSharp'
import { IconLayersClearTwoTone } from './IconLayersClearTwoTone'

export const IconLayersClear = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLayersClearFilled, IconLayersClearOutlined, IconLayersClearRounded, IconLayersClearSharp, IconLayersClearTwoTone)
