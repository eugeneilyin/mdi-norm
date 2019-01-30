import { createThemedIcon } from './utils/createThemedIcon'
import { FilledUnarchive } from './FilledUnarchive'
import { OutlineUnarchive } from './OutlineUnarchive'
import { RoundUnarchive } from './RoundUnarchive'
import { SharpUnarchive } from './SharpUnarchive'
import { TwoToneUnarchive } from './TwoToneUnarchive'

export const Unarchive = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledUnarchive, OutlineUnarchive, RoundUnarchive, SharpUnarchive, TwoToneUnarchive)
