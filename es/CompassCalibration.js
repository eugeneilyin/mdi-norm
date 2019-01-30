import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCompassCalibration } from './FilledCompassCalibration';
import { OutlineCompassCalibration } from './OutlineCompassCalibration';
import { RoundCompassCalibration } from './RoundCompassCalibration';
import { SharpCompassCalibration } from './SharpCompassCalibration';
import { TwoToneCompassCalibration } from './TwoToneCompassCalibration';
export var CompassCalibration =
/*#__PURE__*/
function CompassCalibration(props) {
  return createThemedIcon(props, FilledCompassCalibration, OutlineCompassCalibration, RoundCompassCalibration, SharpCompassCalibration, TwoToneCompassCalibration);
};