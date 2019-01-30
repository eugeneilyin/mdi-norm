import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDialerSip } from './FilledDialerSip'
import { OutlineDialerSip } from './OutlineDialerSip'
import { RoundDialerSip } from './RoundDialerSip'
import { SharpDialerSip } from './SharpDialerSip'
import { TwoToneDialerSip } from './TwoToneDialerSip'

export const DialerSip = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDialerSip, OutlineDialerSip, RoundDialerSip, SharpDialerSip, TwoToneDialerSip)
