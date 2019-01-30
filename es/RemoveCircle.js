import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRemoveCircle } from './FilledRemoveCircle';
import { OutlineRemoveCircle } from './OutlineRemoveCircle';
import { RoundRemoveCircle } from './RoundRemoveCircle';
import { SharpRemoveCircle } from './SharpRemoveCircle';
import { TwoToneRemoveCircle } from './TwoToneRemoveCircle';
export var RemoveCircle =
/*#__PURE__*/
function RemoveCircle(props) {
  return createThemedIcon(props, FilledRemoveCircle, OutlineRemoveCircle, RoundRemoveCircle, SharpRemoveCircle, TwoToneRemoveCircle);
};