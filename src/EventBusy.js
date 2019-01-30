import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEventBusy } from './FilledEventBusy'
import { OutlineEventBusy } from './OutlineEventBusy'
import { RoundEventBusy } from './RoundEventBusy'
import { SharpEventBusy } from './SharpEventBusy'
import { TwoToneEventBusy } from './TwoToneEventBusy'

export const EventBusy = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEventBusy, OutlineEventBusy, RoundEventBusy, SharpEventBusy, TwoToneEventBusy)
