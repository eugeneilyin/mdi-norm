import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCloud } from './FilledCloud';
import { OutlineCloud } from './OutlineCloud';
import { RoundCloud } from './RoundCloud';
import { SharpCloud } from './SharpCloud';
import { TwoToneCloud } from './TwoToneCloud';
export var Cloud =
/*#__PURE__*/
function Cloud(props) {
  return createThemedIcon(props, FilledCloud, OutlineCloud, RoundCloud, SharpCloud, TwoToneCloud);
};