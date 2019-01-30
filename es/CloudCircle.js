import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCloudCircle } from './FilledCloudCircle';
import { OutlineCloudCircle } from './OutlineCloudCircle';
import { RoundCloudCircle } from './RoundCloudCircle';
import { SharpCloudCircle } from './SharpCloudCircle';
import { TwoToneCloudCircle } from './TwoToneCloudCircle';
export var CloudCircle =
/*#__PURE__*/
function CloudCircle(props) {
  return createThemedIcon(props, FilledCloudCircle, OutlineCloudCircle, RoundCloudCircle, SharpCloudCircle, TwoToneCloudCircle);
};