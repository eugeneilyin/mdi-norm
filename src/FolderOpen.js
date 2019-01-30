import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFolderOpen } from './FilledFolderOpen'
import { OutlineFolderOpen } from './OutlineFolderOpen'
import { RoundFolderOpen } from './RoundFolderOpen'
import { SharpFolderOpen } from './SharpFolderOpen'
import { TwoToneFolderOpen } from './TwoToneFolderOpen'

export const FolderOpen = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFolderOpen, OutlineFolderOpen, RoundFolderOpen, SharpFolderOpen, TwoToneFolderOpen)
