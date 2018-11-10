import { createThemedIcon } from './utils/createThemedIcon'
import { IconPanoramaFilled } from './IconPanoramaFilled'
import { IconPanoramaOutlined } from './IconPanoramaOutlined'
import { IconPanoramaRounded } from './IconPanoramaRounded'
import { IconPanoramaSharp } from './IconPanoramaSharp'
import { IconPanoramaTwoTone } from './IconPanoramaTwoTone'

export const IconPanorama = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPanoramaFilled, IconPanoramaOutlined, IconPanoramaRounded, IconPanoramaSharp, IconPanoramaTwoTone)
