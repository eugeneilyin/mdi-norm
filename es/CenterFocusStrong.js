import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCenterFocusStrong } from './FilledCenterFocusStrong';
import { OutlineCenterFocusStrong } from './OutlineCenterFocusStrong';
import { RoundCenterFocusStrong } from './RoundCenterFocusStrong';
import { SharpCenterFocusStrong } from './SharpCenterFocusStrong';
import { TwoToneCenterFocusStrong } from './TwoToneCenterFocusStrong';
export var CenterFocusStrong =
/*#__PURE__*/
function CenterFocusStrong(props) {
  return createThemedIcon(props, FilledCenterFocusStrong, OutlineCenterFocusStrong, RoundCenterFocusStrong, SharpCenterFocusStrong, TwoToneCenterFocusStrong);
};