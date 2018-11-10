import { createThemedIcon } from './utils/createThemedIcon'
import { IconMovieFilterFilled } from './IconMovieFilterFilled'
import { IconMovieFilterOutlined } from './IconMovieFilterOutlined'
import { IconMovieFilterRounded } from './IconMovieFilterRounded'
import { IconMovieFilterSharp } from './IconMovieFilterSharp'
import { IconMovieFilterTwoTone } from './IconMovieFilterTwoTone'

export const IconMovieFilter = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMovieFilterFilled, IconMovieFilterOutlined, IconMovieFilterRounded, IconMovieFilterSharp, IconMovieFilterTwoTone)
