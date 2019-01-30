import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWrapText } from './FilledWrapText'
import { OutlineWrapText } from './OutlineWrapText'
import { RoundWrapText } from './RoundWrapText'
import { SharpWrapText } from './SharpWrapText'
import { TwoToneWrapText } from './TwoToneWrapText'

export const WrapText = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWrapText, OutlineWrapText, RoundWrapText, SharpWrapText, TwoToneWrapText)
