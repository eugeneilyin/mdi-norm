import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCheckCircle } from './FilledCheckCircle'
import { OutlineCheckCircle } from './OutlineCheckCircle'
import { RoundCheckCircle } from './RoundCheckCircle'
import { SharpCheckCircle } from './SharpCheckCircle'
import { TwoToneCheckCircle } from './TwoToneCheckCircle'

export const CheckCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCheckCircle, OutlineCheckCircle, RoundCheckCircle, SharpCheckCircle, TwoToneCheckCircle)
