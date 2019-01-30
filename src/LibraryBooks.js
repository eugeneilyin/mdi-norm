import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLibraryBooks } from './FilledLibraryBooks'
import { OutlineLibraryBooks } from './OutlineLibraryBooks'
import { RoundLibraryBooks } from './RoundLibraryBooks'
import { SharpLibraryBooks } from './SharpLibraryBooks'
import { TwoToneLibraryBooks } from './TwoToneLibraryBooks'

export const LibraryBooks = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLibraryBooks, OutlineLibraryBooks, RoundLibraryBooks, SharpLibraryBooks, TwoToneLibraryBooks)
