import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLibraryMusic } from './FilledLibraryMusic'
import { OutlineLibraryMusic } from './OutlineLibraryMusic'
import { RoundLibraryMusic } from './RoundLibraryMusic'
import { SharpLibraryMusic } from './SharpLibraryMusic'
import { TwoToneLibraryMusic } from './TwoToneLibraryMusic'

export const LibraryMusic = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLibraryMusic, OutlineLibraryMusic, RoundLibraryMusic, SharpLibraryMusic, TwoToneLibraryMusic)
