import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEditAttributes } from './FilledEditAttributes';
import { OutlineEditAttributes } from './OutlineEditAttributes';
import { RoundEditAttributes } from './RoundEditAttributes';
import { SharpEditAttributes } from './SharpEditAttributes';
import { TwoToneEditAttributes } from './TwoToneEditAttributes';
export var EditAttributes =
/*#__PURE__*/
function EditAttributes(props) {
  return createThemedIcon(props, FilledEditAttributes, OutlineEditAttributes, RoundEditAttributes, SharpEditAttributes, TwoToneEditAttributes);
};