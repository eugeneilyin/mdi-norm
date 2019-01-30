import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTextFormat } from './FilledTextFormat'
import { OutlineTextFormat } from './OutlineTextFormat'
import { RoundTextFormat } from './RoundTextFormat'
import { SharpTextFormat } from './SharpTextFormat'
import { TwoToneTextFormat } from './TwoToneTextFormat'

export const TextFormat = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTextFormat, OutlineTextFormat, RoundTextFormat, SharpTextFormat, TwoToneTextFormat)
