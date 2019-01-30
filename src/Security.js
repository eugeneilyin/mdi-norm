import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSecurity } from './FilledSecurity'
import { OutlineSecurity } from './OutlineSecurity'
import { RoundSecurity } from './RoundSecurity'
import { SharpSecurity } from './SharpSecurity'
import { TwoToneSecurity } from './TwoToneSecurity'

export const Security = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSecurity, OutlineSecurity, RoundSecurity, SharpSecurity, TwoToneSecurity)
