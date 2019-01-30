import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCrop32 } from './FilledCrop32';
import { OutlineCrop32 } from './OutlineCrop32';
import { RoundCrop32 } from './RoundCrop32';
import { SharpCrop32 } from './SharpCrop32';
import { TwoToneCrop32 } from './TwoToneCrop32';
export var Crop32 =
/*#__PURE__*/
function Crop32(props) {
  return createThemedIcon(props, FilledCrop32, OutlineCrop32, RoundCrop32, SharpCrop32, TwoToneCrop32);
};