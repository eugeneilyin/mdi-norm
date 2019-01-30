import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFavorite } from './FilledFavorite';
import { OutlineFavorite } from './OutlineFavorite';
import { RoundFavorite } from './RoundFavorite';
import { SharpFavorite } from './SharpFavorite';
import { TwoToneFavorite } from './TwoToneFavorite';
export var Favorite =
/*#__PURE__*/
function Favorite(props) {
  return createThemedIcon(props, FilledFavorite, OutlineFavorite, RoundFavorite, SharpFavorite, TwoToneFavorite);
};