import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEditLocation } from './FilledEditLocation';
import { OutlineEditLocation } from './OutlineEditLocation';
import { RoundEditLocation } from './RoundEditLocation';
import { SharpEditLocation } from './SharpEditLocation';
import { TwoToneEditLocation } from './TwoToneEditLocation';
export var EditLocation =
/*#__PURE__*/
function EditLocation(props) {
  return createThemedIcon(props, FilledEditLocation, OutlineEditLocation, RoundEditLocation, SharpEditLocation, TwoToneEditLocation);
};