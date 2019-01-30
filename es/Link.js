import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLink } from './FilledLink';
import { OutlineLink } from './OutlineLink';
import { RoundLink } from './RoundLink';
import { SharpLink } from './SharpLink';
import { TwoToneLink } from './TwoToneLink';
export var Link =
/*#__PURE__*/
function Link(props) {
  return createThemedIcon(props, FilledLink, OutlineLink, RoundLink, SharpLink, TwoToneLink);
};