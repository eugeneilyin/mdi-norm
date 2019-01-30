import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCollectionsBookmark } from './FilledCollectionsBookmark';
import { OutlineCollectionsBookmark } from './OutlineCollectionsBookmark';
import { RoundCollectionsBookmark } from './RoundCollectionsBookmark';
import { SharpCollectionsBookmark } from './SharpCollectionsBookmark';
import { TwoToneCollectionsBookmark } from './TwoToneCollectionsBookmark';
export var CollectionsBookmark =
/*#__PURE__*/
function CollectionsBookmark(props) {
  return createThemedIcon(props, FilledCollectionsBookmark, OutlineCollectionsBookmark, RoundCollectionsBookmark, SharpCollectionsBookmark, TwoToneCollectionsBookmark);
};