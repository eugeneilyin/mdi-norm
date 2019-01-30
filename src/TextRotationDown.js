import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTextRotationDown } from './FilledTextRotationDown'
import { OutlineTextRotationDown } from './OutlineTextRotationDown'
import { RoundTextRotationDown } from './RoundTextRotationDown'
import { SharpTextRotationDown } from './SharpTextRotationDown'
import { TwoToneTextRotationDown } from './TwoToneTextRotationDown'

export const TextRotationDown = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTextRotationDown, OutlineTextRotationDown, RoundTextRotationDown, SharpTextRotationDown, TwoToneTextRotationDown)
