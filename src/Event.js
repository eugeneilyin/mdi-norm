import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEvent } from './FilledEvent'
import { OutlineEvent } from './OutlineEvent'
import { RoundEvent } from './RoundEvent'
import { SharpEvent } from './SharpEvent'
import { TwoToneEvent } from './TwoToneEvent'

export const Event = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEvent, OutlineEvent, RoundEvent, SharpEvent, TwoToneEvent)
