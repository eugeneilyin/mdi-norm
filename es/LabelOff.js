import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLabelOff } from './FilledLabelOff';
import { OutlineLabelOff } from './OutlineLabelOff';
import { RoundLabelOff } from './RoundLabelOff';
import { SharpLabelOff } from './SharpLabelOff';
import { TwoToneLabelOff } from './TwoToneLabelOff';
export var LabelOff =
/*#__PURE__*/
function LabelOff(props) {
  return createThemedIcon(props, FilledLabelOff, OutlineLabelOff, RoundLabelOff, SharpLabelOff, TwoToneLabelOff);
};