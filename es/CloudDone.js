import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCloudDone } from './FilledCloudDone';
import { OutlineCloudDone } from './OutlineCloudDone';
import { RoundCloudDone } from './RoundCloudDone';
import { SharpCloudDone } from './SharpCloudDone';
import { TwoToneCloudDone } from './TwoToneCloudDone';
export var CloudDone =
/*#__PURE__*/
function CloudDone(props) {
  return createThemedIcon(props, FilledCloudDone, OutlineCloudDone, RoundCloudDone, SharpCloudDone, TwoToneCloudDone);
};