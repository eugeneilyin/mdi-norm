import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPersonPin } from './FilledPersonPin'
import { OutlinePersonPin } from './OutlinePersonPin'
import { RoundPersonPin } from './RoundPersonPin'
import { SharpPersonPin } from './SharpPersonPin'
import { TwoTonePersonPin } from './TwoTonePersonPin'

export const PersonPin = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPersonPin, OutlinePersonPin, RoundPersonPin, SharpPersonPin, TwoTonePersonPin)
