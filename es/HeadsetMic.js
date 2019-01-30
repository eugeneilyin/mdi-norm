import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHeadsetMic } from './FilledHeadsetMic';
import { OutlineHeadsetMic } from './OutlineHeadsetMic';
import { RoundHeadsetMic } from './RoundHeadsetMic';
import { SharpHeadsetMic } from './SharpHeadsetMic';
import { TwoToneHeadsetMic } from './TwoToneHeadsetMic';
export var HeadsetMic =
/*#__PURE__*/
function HeadsetMic(props) {
  return createThemedIcon(props, FilledHeadsetMic, OutlineHeadsetMic, RoundHeadsetMic, SharpHeadsetMic, TwoToneHeadsetMic);
};