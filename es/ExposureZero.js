import { createThemedIcon } from './utils/createThemedIcon';
import { FilledExposureZero } from './FilledExposureZero';
import { OutlineExposureZero } from './OutlineExposureZero';
import { RoundExposureZero } from './RoundExposureZero';
import { SharpExposureZero } from './SharpExposureZero';
import { TwoToneExposureZero } from './TwoToneExposureZero';
export var ExposureZero =
/*#__PURE__*/
function ExposureZero(props) {
  return createThemedIcon(props, FilledExposureZero, OutlineExposureZero, RoundExposureZero, SharpExposureZero, TwoToneExposureZero);
};