import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVolumeMute } from './FilledVolumeMute';
import { OutlineVolumeMute } from './OutlineVolumeMute';
import { RoundVolumeMute } from './RoundVolumeMute';
import { SharpVolumeMute } from './SharpVolumeMute';
import { TwoToneVolumeMute } from './TwoToneVolumeMute';
export var VolumeMute =
/*#__PURE__*/
function VolumeMute(props) {
  return createThemedIcon(props, FilledVolumeMute, OutlineVolumeMute, RoundVolumeMute, SharpVolumeMute, TwoToneVolumeMute);
};