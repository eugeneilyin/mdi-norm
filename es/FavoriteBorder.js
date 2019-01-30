import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFavoriteBorder } from './FilledFavoriteBorder';
import { OutlineFavoriteBorder } from './OutlineFavoriteBorder';
import { RoundFavoriteBorder } from './RoundFavoriteBorder';
import { SharpFavoriteBorder } from './SharpFavoriteBorder';
import { TwoToneFavoriteBorder } from './TwoToneFavoriteBorder';
export var FavoriteBorder =
/*#__PURE__*/
function FavoriteBorder(props) {
  return createThemedIcon(props, FilledFavoriteBorder, OutlineFavoriteBorder, RoundFavoriteBorder, SharpFavoriteBorder, TwoToneFavoriteBorder);
};