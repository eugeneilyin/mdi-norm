import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLooks } from './FilledLooks'
import { OutlineLooks } from './OutlineLooks'
import { RoundLooks } from './RoundLooks'
import { SharpLooks } from './SharpLooks'
import { TwoToneLooks } from './TwoToneLooks'

export const Looks = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLooks, OutlineLooks, RoundLooks, SharpLooks, TwoToneLooks)
