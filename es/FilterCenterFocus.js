import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFilterCenterFocus } from './FilledFilterCenterFocus';
import { OutlineFilterCenterFocus } from './OutlineFilterCenterFocus';
import { RoundFilterCenterFocus } from './RoundFilterCenterFocus';
import { SharpFilterCenterFocus } from './SharpFilterCenterFocus';
import { TwoToneFilterCenterFocus } from './TwoToneFilterCenterFocus';
export var FilterCenterFocus =
/*#__PURE__*/
function FilterCenterFocus(props) {
  return createThemedIcon(props, FilledFilterCenterFocus, OutlineFilterCenterFocus, RoundFilterCenterFocus, SharpFilterCenterFocus, TwoToneFilterCenterFocus);
};