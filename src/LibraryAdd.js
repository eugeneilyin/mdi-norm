import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLibraryAdd } from './FilledLibraryAdd'
import { OutlineLibraryAdd } from './OutlineLibraryAdd'
import { RoundLibraryAdd } from './RoundLibraryAdd'
import { SharpLibraryAdd } from './SharpLibraryAdd'
import { TwoToneLibraryAdd } from './TwoToneLibraryAdd'

export const LibraryAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLibraryAdd, OutlineLibraryAdd, RoundLibraryAdd, SharpLibraryAdd, TwoToneLibraryAdd)
