import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalMovies } from './FilledLocalMovies'
import { OutlineLocalMovies } from './OutlineLocalMovies'
import { RoundLocalMovies } from './RoundLocalMovies'
import { SharpLocalMovies } from './SharpLocalMovies'
import { TwoToneLocalMovies } from './TwoToneLocalMovies'

export const LocalMovies = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalMovies, OutlineLocalMovies, RoundLocalMovies, SharpLocalMovies, TwoToneLocalMovies)
