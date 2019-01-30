import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPermCameraMic } from './FilledPermCameraMic';
import { OutlinePermCameraMic } from './OutlinePermCameraMic';
import { RoundPermCameraMic } from './RoundPermCameraMic';
import { SharpPermCameraMic } from './SharpPermCameraMic';
import { TwoTonePermCameraMic } from './TwoTonePermCameraMic';
export var PermCameraMic =
/*#__PURE__*/
function PermCameraMic(props) {
  return createThemedIcon(props, FilledPermCameraMic, OutlinePermCameraMic, RoundPermCameraMic, SharpPermCameraMic, TwoTonePermCameraMic);
};