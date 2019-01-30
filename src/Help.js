import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHelp } from './FilledHelp'
import { OutlineHelp } from './OutlineHelp'
import { RoundHelp } from './RoundHelp'
import { SharpHelp } from './SharpHelp'
import { TwoToneHelp } from './TwoToneHelp'

export const Help = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHelp, OutlineHelp, RoundHelp, SharpHelp, TwoToneHelp)
