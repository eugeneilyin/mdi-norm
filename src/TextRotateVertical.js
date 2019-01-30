import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTextRotateVertical } from './FilledTextRotateVertical'
import { OutlineTextRotateVertical } from './OutlineTextRotateVertical'
import { RoundTextRotateVertical } from './RoundTextRotateVertical'
import { SharpTextRotateVertical } from './SharpTextRotateVertical'
import { TwoToneTextRotateVertical } from './TwoToneTextRotateVertical'

export const TextRotateVertical = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTextRotateVertical, OutlineTextRotateVertical, RoundTextRotateVertical, SharpTextRotateVertical, TwoToneTextRotateVertical)
