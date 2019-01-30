import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBookmarks } from './FilledBookmarks'
import { OutlineBookmarks } from './OutlineBookmarks'
import { RoundBookmarks } from './RoundBookmarks'
import { SharpBookmarks } from './SharpBookmarks'
import { TwoToneBookmarks } from './TwoToneBookmarks'

export const Bookmarks = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBookmarks, OutlineBookmarks, RoundBookmarks, SharpBookmarks, TwoToneBookmarks)
