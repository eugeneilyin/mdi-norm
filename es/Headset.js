import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHeadset } from './FilledHeadset';
import { OutlineHeadset } from './OutlineHeadset';
import { RoundHeadset } from './RoundHeadset';
import { SharpHeadset } from './SharpHeadset';
import { TwoToneHeadset } from './TwoToneHeadset';
export var Headset =
/*#__PURE__*/
function Headset(props) {
  return createThemedIcon(props, FilledHeadset, OutlineHeadset, RoundHeadset, SharpHeadset, TwoToneHeadset);
};