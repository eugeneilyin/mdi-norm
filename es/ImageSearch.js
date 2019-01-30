import { createThemedIcon } from './utils/createThemedIcon';
import { FilledImageSearch } from './FilledImageSearch';
import { OutlineImageSearch } from './OutlineImageSearch';
import { RoundImageSearch } from './RoundImageSearch';
import { SharpImageSearch } from './SharpImageSearch';
import { TwoToneImageSearch } from './TwoToneImageSearch';
export var ImageSearch =
/*#__PURE__*/
function ImageSearch(props) {
  return createThemedIcon(props, FilledImageSearch, OutlineImageSearch, RoundImageSearch, SharpImageSearch, TwoToneImageSearch);
};