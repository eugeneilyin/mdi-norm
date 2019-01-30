import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTextRotationNone } from './FilledTextRotationNone'
import { OutlineTextRotationNone } from './OutlineTextRotationNone'
import { RoundTextRotationNone } from './RoundTextRotationNone'
import { SharpTextRotationNone } from './SharpTextRotationNone'
import { TwoToneTextRotationNone } from './TwoToneTextRotationNone'

export const TextRotationNone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTextRotationNone, OutlineTextRotationNone, RoundTextRotationNone, SharpTextRotationNone, TwoToneTextRotationNone)
