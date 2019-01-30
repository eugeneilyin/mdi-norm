import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCall } from './FilledCall'
import { OutlineCall } from './OutlineCall'
import { RoundCall } from './RoundCall'
import { SharpCall } from './SharpCall'
import { TwoToneCall } from './TwoToneCall'

export const Call = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCall, OutlineCall, RoundCall, SharpCall, TwoToneCall)
