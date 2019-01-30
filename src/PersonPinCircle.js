import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPersonPinCircle } from './FilledPersonPinCircle'
import { OutlinePersonPinCircle } from './OutlinePersonPinCircle'
import { RoundPersonPinCircle } from './RoundPersonPinCircle'
import { SharpPersonPinCircle } from './SharpPersonPinCircle'
import { TwoTonePersonPinCircle } from './TwoTonePersonPinCircle'

export const PersonPinCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPersonPinCircle, OutlinePersonPinCircle, RoundPersonPinCircle, SharpPersonPinCircle, TwoTonePersonPinCircle)
