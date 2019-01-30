import { createThemedIcon } from './utils/createThemedIcon';
import { FilledScreenShare } from './FilledScreenShare';
import { OutlineScreenShare } from './OutlineScreenShare';
import { RoundScreenShare } from './RoundScreenShare';
import { SharpScreenShare } from './SharpScreenShare';
import { TwoToneScreenShare } from './TwoToneScreenShare';
export var ScreenShare =
/*#__PURE__*/
function ScreenShare(props) {
  return createThemedIcon(props, FilledScreenShare, OutlineScreenShare, RoundScreenShare, SharpScreenShare, TwoToneScreenShare);
};