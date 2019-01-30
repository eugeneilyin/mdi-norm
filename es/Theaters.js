import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTheaters } from './FilledTheaters';
import { OutlineTheaters } from './OutlineTheaters';
import { RoundTheaters } from './RoundTheaters';
import { SharpTheaters } from './SharpTheaters';
import { TwoToneTheaters } from './TwoToneTheaters';
export var Theaters =
/*#__PURE__*/
function Theaters(props) {
  return createThemedIcon(props, FilledTheaters, OutlineTheaters, RoundTheaters, SharpTheaters, TwoToneTheaters);
};