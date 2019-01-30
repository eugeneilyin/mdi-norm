import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBookmarkBorder } from './FilledBookmarkBorder';
import { OutlineBookmarkBorder } from './OutlineBookmarkBorder';
import { RoundBookmarkBorder } from './RoundBookmarkBorder';
import { SharpBookmarkBorder } from './SharpBookmarkBorder';
import { TwoToneBookmarkBorder } from './TwoToneBookmarkBorder';
export var BookmarkBorder =
/*#__PURE__*/
function BookmarkBorder(props) {
  return createThemedIcon(props, FilledBookmarkBorder, OutlineBookmarkBorder, RoundBookmarkBorder, SharpBookmarkBorder, TwoToneBookmarkBorder);
};