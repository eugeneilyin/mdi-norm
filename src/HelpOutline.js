import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHelpOutline } from './FilledHelpOutline'
import { OutlineHelpOutline } from './OutlineHelpOutline'
import { RoundHelpOutline } from './RoundHelpOutline'
import { SharpHelpOutline } from './SharpHelpOutline'
import { TwoToneHelpOutline } from './TwoToneHelpOutline'

export const HelpOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHelpOutline, OutlineHelpOutline, RoundHelpOutline, SharpHelpOutline, TwoToneHelpOutline)
