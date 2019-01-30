import { createThemedIcon } from './utils/createThemedIcon'
import { FilledUnsubscribe } from './FilledUnsubscribe'
import { OutlineUnsubscribe } from './OutlineUnsubscribe'
import { RoundUnsubscribe } from './RoundUnsubscribe'
import { SharpUnsubscribe } from './SharpUnsubscribe'
import { TwoToneUnsubscribe } from './TwoToneUnsubscribe'

export const Unsubscribe = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledUnsubscribe, OutlineUnsubscribe, RoundUnsubscribe, SharpUnsubscribe, TwoToneUnsubscribe)
