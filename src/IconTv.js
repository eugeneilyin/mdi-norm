import { createThemedIcon } from './utils/createThemedIcon'
import { IconTvFilled } from './IconTvFilled'
import { IconTvOutlined } from './IconTvOutlined'
import { IconTvRounded } from './IconTvRounded'
import { IconTvSharp } from './IconTvSharp'
import { IconTvTwoTone } from './IconTvTwoTone'

export const IconTv = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTvFilled, IconTvOutlined, IconTvRounded, IconTvSharp, IconTvTwoTone)
