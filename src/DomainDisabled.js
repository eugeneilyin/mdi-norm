import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDomainDisabled } from './FilledDomainDisabled'
import { OutlineDomainDisabled } from './OutlineDomainDisabled'
import { RoundDomainDisabled } from './RoundDomainDisabled'
import { SharpDomainDisabled } from './SharpDomainDisabled'
import { TwoToneDomainDisabled } from './TwoToneDomainDisabled'

export const DomainDisabled = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDomainDisabled, OutlineDomainDisabled, RoundDomainDisabled, SharpDomainDisabled, TwoToneDomainDisabled)
