import { createThemedIcon } from './utils/createThemedIcon'
import { FilledShortText } from './FilledShortText'
import { OutlineShortText } from './OutlineShortText'
import { RoundShortText } from './RoundShortText'
import { SharpShortText } from './SharpShortText'
import { TwoToneShortText } from './TwoToneShortText'

export const ShortText = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledShortText, OutlineShortText, RoundShortText, SharpShortText, TwoToneShortText)
