import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTrendingFlat } from './FilledTrendingFlat';
import { OutlineTrendingFlat } from './OutlineTrendingFlat';
import { RoundTrendingFlat } from './RoundTrendingFlat';
import { SharpTrendingFlat } from './SharpTrendingFlat';
import { TwoToneTrendingFlat } from './TwoToneTrendingFlat';
export var TrendingFlat =
/*#__PURE__*/
function TrendingFlat(props) {
  return createThemedIcon(props, FilledTrendingFlat, OutlineTrendingFlat, RoundTrendingFlat, SharpTrendingFlat, TwoToneTrendingFlat);
};