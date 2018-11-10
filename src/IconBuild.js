import { createThemedIcon } from './utils/createThemedIcon'
import { IconBuildFilled } from './IconBuildFilled'
import { IconBuildOutlined } from './IconBuildOutlined'
import { IconBuildRounded } from './IconBuildRounded'
import { IconBuildSharp } from './IconBuildSharp'
import { IconBuildTwoTone } from './IconBuildTwoTone'

export const IconBuild = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBuildFilled, IconBuildOutlined, IconBuildRounded, IconBuildSharp, IconBuildTwoTone)
