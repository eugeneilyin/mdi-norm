import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWbCloudy } from './FilledWbCloudy';
import { OutlineWbCloudy } from './OutlineWbCloudy';
import { RoundWbCloudy } from './RoundWbCloudy';
import { SharpWbCloudy } from './SharpWbCloudy';
import { TwoToneWbCloudy } from './TwoToneWbCloudy';
export var WbCloudy =
/*#__PURE__*/
function WbCloudy(props) {
  return createThemedIcon(props, FilledWbCloudy, OutlineWbCloudy, RoundWbCloudy, SharpWbCloudy, TwoToneWbCloudy);
};