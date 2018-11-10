import { createThemedIcon } from './utils/createThemedIcon'
import { IconLayersFilled } from './IconLayersFilled'
import { IconLayersOutlined } from './IconLayersOutlined'
import { IconLayersRounded } from './IconLayersRounded'
import { IconLayersSharp } from './IconLayersSharp'
import { IconLayersTwoTone } from './IconLayersTwoTone'

export const IconLayers = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLayersFilled, IconLayersOutlined, IconLayersRounded, IconLayersSharp, IconLayersTwoTone)
