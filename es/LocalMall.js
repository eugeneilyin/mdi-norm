import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalMall } from './FilledLocalMall';
import { OutlineLocalMall } from './OutlineLocalMall';
import { RoundLocalMall } from './RoundLocalMall';
import { SharpLocalMall } from './SharpLocalMall';
import { TwoToneLocalMall } from './TwoToneLocalMall';
export var LocalMall =
/*#__PURE__*/
function LocalMall(props) {
  return createThemedIcon(props, FilledLocalMall, OutlineLocalMall, RoundLocalMall, SharpLocalMall, TwoToneLocalMall);
};