import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBookmark } from './FilledBookmark'
import { OutlineBookmark } from './OutlineBookmark'
import { RoundBookmark } from './RoundBookmark'
import { SharpBookmark } from './SharpBookmark'
import { TwoToneBookmark } from './TwoToneBookmark'

export const Bookmark = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBookmark, OutlineBookmark, RoundBookmark, SharpBookmark, TwoToneBookmark)
