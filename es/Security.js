import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSecurity } from './FilledSecurity';
import { OutlineSecurity } from './OutlineSecurity';
import { RoundSecurity } from './RoundSecurity';
import { SharpSecurity } from './SharpSecurity';
import { TwoToneSecurity } from './TwoToneSecurity';
export var Security =
/*#__PURE__*/
function Security(props) {
  return createThemedIcon(props, FilledSecurity, OutlineSecurity, RoundSecurity, SharpSecurity, TwoToneSecurity);
};