import { createThemedIcon } from './utils/createThemedIcon'
import { IconTerrainFilled } from './IconTerrainFilled'
import { IconTerrainOutlined } from './IconTerrainOutlined'
import { IconTerrainRounded } from './IconTerrainRounded'
import { IconTerrainSharp } from './IconTerrainSharp'
import { IconTerrainTwoTone } from './IconTerrainTwoTone'

export const IconTerrain = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTerrainFilled, IconTerrainOutlined, IconTerrainRounded, IconTerrainSharp, IconTerrainTwoTone)
