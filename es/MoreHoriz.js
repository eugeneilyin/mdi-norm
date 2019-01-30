import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMoreHoriz } from './FilledMoreHoriz';
import { OutlineMoreHoriz } from './OutlineMoreHoriz';
import { RoundMoreHoriz } from './RoundMoreHoriz';
import { SharpMoreHoriz } from './SharpMoreHoriz';
import { TwoToneMoreHoriz } from './TwoToneMoreHoriz';
export var MoreHoriz =
/*#__PURE__*/
function MoreHoriz(props) {
  return createThemedIcon(props, FilledMoreHoriz, OutlineMoreHoriz, RoundMoreHoriz, SharpMoreHoriz, TwoToneMoreHoriz);
};