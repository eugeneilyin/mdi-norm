import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFeaturedPlayList } from './FilledFeaturedPlayList';
import { OutlineFeaturedPlayList } from './OutlineFeaturedPlayList';
import { RoundFeaturedPlayList } from './RoundFeaturedPlayList';
import { SharpFeaturedPlayList } from './SharpFeaturedPlayList';
import { TwoToneFeaturedPlayList } from './TwoToneFeaturedPlayList';
export var FeaturedPlayList =
/*#__PURE__*/
function FeaturedPlayList(props) {
  return createThemedIcon(props, FilledFeaturedPlayList, OutlineFeaturedPlayList, RoundFeaturedPlayList, SharpFeaturedPlayList, TwoToneFeaturedPlayList);
};