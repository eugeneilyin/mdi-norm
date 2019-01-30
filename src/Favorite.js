import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFavorite } from './FilledFavorite'
import { OutlineFavorite } from './OutlineFavorite'
import { RoundFavorite } from './RoundFavorite'
import { SharpFavorite } from './SharpFavorite'
import { TwoToneFavorite } from './TwoToneFavorite'

export const Favorite = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFavorite, OutlineFavorite, RoundFavorite, SharpFavorite, TwoToneFavorite)
