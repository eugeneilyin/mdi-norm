import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHotTub } from './FilledHotTub';
import { OutlineHotTub } from './OutlineHotTub';
import { RoundHotTub } from './RoundHotTub';
import { SharpHotTub } from './SharpHotTub';
import { TwoToneHotTub } from './TwoToneHotTub';
export var HotTub =
/*#__PURE__*/
function HotTub(props) {
  return createThemedIcon(props, FilledHotTub, OutlineHotTub, RoundHotTub, SharpHotTub, TwoToneHotTub);
};