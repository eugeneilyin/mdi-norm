import { createThemedIcon } from './utils/createThemedIcon'
import { IconTrendingFlatFilled } from './IconTrendingFlatFilled'
import { IconTrendingFlatOutlined } from './IconTrendingFlatOutlined'
import { IconTrendingFlatRounded } from './IconTrendingFlatRounded'
import { IconTrendingFlatSharp } from './IconTrendingFlatSharp'
import { IconTrendingFlatTwoTone } from './IconTrendingFlatTwoTone'

export const IconTrendingFlat = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTrendingFlatFilled, IconTrendingFlatOutlined, IconTrendingFlatRounded, IconTrendingFlatSharp, IconTrendingFlatTwoTone)
