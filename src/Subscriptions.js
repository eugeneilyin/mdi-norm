import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSubscriptions } from './FilledSubscriptions'
import { OutlineSubscriptions } from './OutlineSubscriptions'
import { RoundSubscriptions } from './RoundSubscriptions'
import { SharpSubscriptions } from './SharpSubscriptions'
import { TwoToneSubscriptions } from './TwoToneSubscriptions'

export const Subscriptions = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSubscriptions, OutlineSubscriptions, RoundSubscriptions, SharpSubscriptions, TwoToneSubscriptions)
