import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDomain } from './FilledDomain'
import { OutlineDomain } from './OutlineDomain'
import { RoundDomain } from './RoundDomain'
import { SharpDomain } from './SharpDomain'
import { TwoToneDomain } from './TwoToneDomain'

export const Domain = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDomain, OutlineDomain, RoundDomain, SharpDomain, TwoToneDomain)
