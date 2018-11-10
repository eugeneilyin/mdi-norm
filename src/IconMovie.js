import { createThemedIcon } from './utils/createThemedIcon'
import { IconMovieFilled } from './IconMovieFilled'
import { IconMovieOutlined } from './IconMovieOutlined'
import { IconMovieRounded } from './IconMovieRounded'
import { IconMovieSharp } from './IconMovieSharp'
import { IconMovieTwoTone } from './IconMovieTwoTone'

export const IconMovie = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMovieFilled, IconMovieOutlined, IconMovieRounded, IconMovieSharp, IconMovieTwoTone)
