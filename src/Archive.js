import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArchive } from './FilledArchive'
import { OutlineArchive } from './OutlineArchive'
import { RoundArchive } from './RoundArchive'
import { SharpArchive } from './SharpArchive'
import { TwoToneArchive } from './TwoToneArchive'

export const Archive = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArchive, OutlineArchive, RoundArchive, SharpArchive, TwoToneArchive)
