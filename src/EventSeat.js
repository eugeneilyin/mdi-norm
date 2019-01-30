import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEventSeat } from './FilledEventSeat'
import { OutlineEventSeat } from './OutlineEventSeat'
import { RoundEventSeat } from './RoundEventSeat'
import { SharpEventSeat } from './SharpEventSeat'
import { TwoToneEventSeat } from './TwoToneEventSeat'

export const EventSeat = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEventSeat, OutlineEventSeat, RoundEventSeat, SharpEventSeat, TwoToneEventSeat)
