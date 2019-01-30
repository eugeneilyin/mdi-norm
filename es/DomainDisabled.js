import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDomainDisabled } from './FilledDomainDisabled';
import { OutlineDomainDisabled } from './OutlineDomainDisabled';
import { RoundDomainDisabled } from './RoundDomainDisabled';
import { SharpDomainDisabled } from './SharpDomainDisabled';
import { TwoToneDomainDisabled } from './TwoToneDomainDisabled';
export var DomainDisabled =
/*#__PURE__*/
function DomainDisabled(props) {
  return createThemedIcon(props, FilledDomainDisabled, OutlineDomainDisabled, RoundDomainDisabled, SharpDomainDisabled, TwoToneDomainDisabled);
};