import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFileCopy } from './FilledFileCopy'
import { OutlineFileCopy } from './OutlineFileCopy'
import { RoundFileCopy } from './RoundFileCopy'
import { SharpFileCopy } from './SharpFileCopy'
import { TwoToneFileCopy } from './TwoToneFileCopy'

export const FileCopy = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFileCopy, OutlineFileCopy, RoundFileCopy, SharpFileCopy, TwoToneFileCopy)
