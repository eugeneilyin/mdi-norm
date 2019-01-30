import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStoreMallDirectory } from './FilledStoreMallDirectory'
import { OutlineStoreMallDirectory } from './OutlineStoreMallDirectory'
import { RoundStoreMallDirectory } from './RoundStoreMallDirectory'
import { SharpStoreMallDirectory } from './SharpStoreMallDirectory'
import { TwoToneStoreMallDirectory } from './TwoToneStoreMallDirectory'

export const StoreMallDirectory = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStoreMallDirectory, OutlineStoreMallDirectory, RoundStoreMallDirectory, SharpStoreMallDirectory, TwoToneStoreMallDirectory)
