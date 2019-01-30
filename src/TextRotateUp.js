import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTextRotateUp } from './FilledTextRotateUp'
import { OutlineTextRotateUp } from './OutlineTextRotateUp'
import { RoundTextRotateUp } from './RoundTextRotateUp'
import { SharpTextRotateUp } from './SharpTextRotateUp'
import { TwoToneTextRotateUp } from './TwoToneTextRotateUp'

export const TextRotateUp = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTextRotateUp, OutlineTextRotateUp, RoundTextRotateUp, SharpTextRotateUp, TwoToneTextRotateUp)
