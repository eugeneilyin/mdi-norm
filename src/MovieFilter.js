import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMovieFilter } from './FilledMovieFilter'
import { OutlineMovieFilter } from './OutlineMovieFilter'
import { RoundMovieFilter } from './RoundMovieFilter'
import { SharpMovieFilter } from './SharpMovieFilter'
import { TwoToneMovieFilter } from './TwoToneMovieFilter'

export const MovieFilter = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMovieFilter, OutlineMovieFilter, RoundMovieFilter, SharpMovieFilter, TwoToneMovieFilter)
