import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCollectionsBookmark } from './FilledCollectionsBookmark'
import { OutlineCollectionsBookmark } from './OutlineCollectionsBookmark'
import { RoundCollectionsBookmark } from './RoundCollectionsBookmark'
import { SharpCollectionsBookmark } from './SharpCollectionsBookmark'
import { TwoToneCollectionsBookmark } from './TwoToneCollectionsBookmark'

export const CollectionsBookmark = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCollectionsBookmark, OutlineCollectionsBookmark, RoundCollectionsBookmark, SharpCollectionsBookmark, TwoToneCollectionsBookmark)
