import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFolderShared } from './FilledFolderShared'
import { OutlineFolderShared } from './OutlineFolderShared'
import { RoundFolderShared } from './RoundFolderShared'
import { SharpFolderShared } from './SharpFolderShared'
import { TwoToneFolderShared } from './TwoToneFolderShared'

export const FolderShared = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFolderShared, OutlineFolderShared, RoundFolderShared, SharpFolderShared, TwoToneFolderShared)
