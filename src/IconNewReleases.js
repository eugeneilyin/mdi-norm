import { createThemedIcon } from './utils/createThemedIcon'
import { IconNewReleasesFilled } from './IconNewReleasesFilled'
import { IconNewReleasesOutlined } from './IconNewReleasesOutlined'
import { IconNewReleasesRounded } from './IconNewReleasesRounded'
import { IconNewReleasesSharp } from './IconNewReleasesSharp'
import { IconNewReleasesTwoTone } from './IconNewReleasesTwoTone'

export const IconNewReleases = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNewReleasesFilled, IconNewReleasesOutlined, IconNewReleasesRounded, IconNewReleasesSharp, IconNewReleasesTwoTone)
