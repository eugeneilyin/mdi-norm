import { createThemedIcon } from './utils/createThemedIcon';
import { FilledExposure } from './FilledExposure';
import { OutlineExposure } from './OutlineExposure';
import { RoundExposure } from './RoundExposure';
import { SharpExposure } from './SharpExposure';
import { TwoToneExposure } from './TwoToneExposure';
export var Exposure =
/*#__PURE__*/
function Exposure(props) {
  return createThemedIcon(props, FilledExposure, OutlineExposure, RoundExposure, SharpExposure, TwoToneExposure);
};