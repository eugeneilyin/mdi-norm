import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMovieCreation } from './FilledMovieCreation'
import { OutlineMovieCreation } from './OutlineMovieCreation'
import { RoundMovieCreation } from './RoundMovieCreation'
import { SharpMovieCreation } from './SharpMovieCreation'
import { TwoToneMovieCreation } from './TwoToneMovieCreation'

export const MovieCreation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMovieCreation, OutlineMovieCreation, RoundMovieCreation, SharpMovieCreation, TwoToneMovieCreation)
