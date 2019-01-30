import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLinkOff } from './FilledLinkOff';
import { OutlineLinkOff } from './OutlineLinkOff';
import { RoundLinkOff } from './RoundLinkOff';
import { SharpLinkOff } from './SharpLinkOff';
import { TwoToneLinkOff } from './TwoToneLinkOff';
export var LinkOff =
/*#__PURE__*/
function LinkOff(props) {
  return createThemedIcon(props, FilledLinkOff, OutlineLinkOff, RoundLinkOff, SharpLinkOff, TwoToneLinkOff);
};