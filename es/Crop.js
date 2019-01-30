import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCrop } from './FilledCrop';
import { OutlineCrop } from './OutlineCrop';
import { RoundCrop } from './RoundCrop';
import { SharpCrop } from './SharpCrop';
import { TwoToneCrop } from './TwoToneCrop';
export var Crop =
/*#__PURE__*/
function Crop(props) {
  return createThemedIcon(props, FilledCrop, OutlineCrop, RoundCrop, SharpCrop, TwoToneCrop);
};