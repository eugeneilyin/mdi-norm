import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCloudQueue } from './FilledCloudQueue';
import { OutlineCloudQueue } from './OutlineCloudQueue';
import { RoundCloudQueue } from './RoundCloudQueue';
import { SharpCloudQueue } from './SharpCloudQueue';
import { TwoToneCloudQueue } from './TwoToneCloudQueue';
export var CloudQueue =
/*#__PURE__*/
function CloudQueue(props) {
  return createThemedIcon(props, FilledCloudQueue, OutlineCloudQueue, RoundCloudQueue, SharpCloudQueue, TwoToneCloudQueue);
};