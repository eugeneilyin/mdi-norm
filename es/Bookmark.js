import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBookmark } from './FilledBookmark';
import { OutlineBookmark } from './OutlineBookmark';
import { RoundBookmark } from './RoundBookmark';
import { SharpBookmark } from './SharpBookmark';
import { TwoToneBookmark } from './TwoToneBookmark';
export var Bookmark =
/*#__PURE__*/
function Bookmark(props) {
  return createThemedIcon(props, FilledBookmark, OutlineBookmark, RoundBookmark, SharpBookmark, TwoToneBookmark);
};