import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTraffic } from './FilledTraffic';
import { OutlineTraffic } from './OutlineTraffic';
import { RoundTraffic } from './RoundTraffic';
import { SharpTraffic } from './SharpTraffic';
import { TwoToneTraffic } from './TwoToneTraffic';
export var Traffic =
/*#__PURE__*/
function Traffic(props) {
  return createThemedIcon(props, FilledTraffic, OutlineTraffic, RoundTraffic, SharpTraffic, TwoToneTraffic);
};