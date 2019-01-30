import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMyLocation } from './FilledMyLocation';
import { OutlineMyLocation } from './OutlineMyLocation';
import { RoundMyLocation } from './RoundMyLocation';
import { SharpMyLocation } from './SharpMyLocation';
import { TwoToneMyLocation } from './TwoToneMyLocation';
export var MyLocation =
/*#__PURE__*/
function MyLocation(props) {
  return createThemedIcon(props, FilledMyLocation, OutlineMyLocation, RoundMyLocation, SharpMyLocation, TwoToneMyLocation);
};