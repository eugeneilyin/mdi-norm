import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLinearScale } from './FilledLinearScale';
import { OutlineLinearScale } from './OutlineLinearScale';
import { RoundLinearScale } from './RoundLinearScale';
import { SharpLinearScale } from './SharpLinearScale';
import { TwoToneLinearScale } from './TwoToneLinearScale';
export var LinearScale =
/*#__PURE__*/
function LinearScale(props) {
  return createThemedIcon(props, FilledLinearScale, OutlineLinearScale, RoundLinearScale, SharpLinearScale, TwoToneLinearScale);
};