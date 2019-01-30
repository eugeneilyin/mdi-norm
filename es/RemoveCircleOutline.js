import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRemoveCircleOutline } from './FilledRemoveCircleOutline';
import { OutlineRemoveCircleOutline } from './OutlineRemoveCircleOutline';
import { RoundRemoveCircleOutline } from './RoundRemoveCircleOutline';
import { SharpRemoveCircleOutline } from './SharpRemoveCircleOutline';
import { TwoToneRemoveCircleOutline } from './TwoToneRemoveCircleOutline';
export var RemoveCircleOutline =
/*#__PURE__*/
function RemoveCircleOutline(props) {
  return createThemedIcon(props, FilledRemoveCircleOutline, OutlineRemoveCircleOutline, RoundRemoveCircleOutline, SharpRemoveCircleOutline, TwoToneRemoveCircleOutline);
};