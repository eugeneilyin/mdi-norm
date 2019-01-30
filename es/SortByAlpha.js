import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSortByAlpha } from './FilledSortByAlpha';
import { OutlineSortByAlpha } from './OutlineSortByAlpha';
import { RoundSortByAlpha } from './RoundSortByAlpha';
import { SharpSortByAlpha } from './SharpSortByAlpha';
import { TwoToneSortByAlpha } from './TwoToneSortByAlpha';
export var SortByAlpha =
/*#__PURE__*/
function SortByAlpha(props) {
  return createThemedIcon(props, FilledSortByAlpha, OutlineSortByAlpha, RoundSortByAlpha, SharpSortByAlpha, TwoToneSortByAlpha);
};