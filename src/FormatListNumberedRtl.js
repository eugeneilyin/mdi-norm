import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatListNumberedRtl } from './FilledFormatListNumberedRtl'
import { OutlineFormatListNumberedRtl } from './OutlineFormatListNumberedRtl'
import { RoundFormatListNumberedRtl } from './RoundFormatListNumberedRtl'
import { SharpFormatListNumberedRtl } from './SharpFormatListNumberedRtl'
import { TwoToneFormatListNumberedRtl } from './TwoToneFormatListNumberedRtl'

export const FormatListNumberedRtl = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatListNumberedRtl, OutlineFormatListNumberedRtl, RoundFormatListNumberedRtl, SharpFormatListNumberedRtl, TwoToneFormatListNumberedRtl)
