import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatListNumbered } from './FilledFormatListNumbered'
import { OutlineFormatListNumbered } from './OutlineFormatListNumbered'
import { RoundFormatListNumbered } from './RoundFormatListNumbered'
import { SharpFormatListNumbered } from './SharpFormatListNumbered'
import { TwoToneFormatListNumbered } from './TwoToneFormatListNumbered'

export const FormatListNumbered = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatListNumbered, OutlineFormatListNumbered, RoundFormatListNumbered, SharpFormatListNumbered, TwoToneFormatListNumbered)
