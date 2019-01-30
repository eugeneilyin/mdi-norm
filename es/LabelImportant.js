import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLabelImportant } from './FilledLabelImportant';
import { OutlineLabelImportant } from './OutlineLabelImportant';
import { RoundLabelImportant } from './RoundLabelImportant';
import { SharpLabelImportant } from './SharpLabelImportant';
import { TwoToneLabelImportant } from './TwoToneLabelImportant';
export var LabelImportant =
/*#__PURE__*/
function LabelImportant(props) {
  return createThemedIcon(props, FilledLabelImportant, OutlineLabelImportant, RoundLabelImportant, SharpLabelImportant, TwoToneLabelImportant);
};