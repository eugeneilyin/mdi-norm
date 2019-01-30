import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFavoriteBorder } from './FilledFavoriteBorder'
import { OutlineFavoriteBorder } from './OutlineFavoriteBorder'
import { RoundFavoriteBorder } from './RoundFavoriteBorder'
import { SharpFavoriteBorder } from './SharpFavoriteBorder'
import { TwoToneFavoriteBorder } from './TwoToneFavoriteBorder'

export const FavoriteBorder = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFavoriteBorder, OutlineFavoriteBorder, RoundFavoriteBorder, SharpFavoriteBorder, TwoToneFavoriteBorder)
