import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMovie } from './FilledMovie'
import { OutlineMovie } from './OutlineMovie'
import { RoundMovie } from './RoundMovie'
import { SharpMovie } from './SharpMovie'
import { TwoToneMovie } from './TwoToneMovie'

export const Movie = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMovie, OutlineMovie, RoundMovie, SharpMovie, TwoToneMovie)
