import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBlock } from './FilledBlock';
import { OutlineBlock } from './OutlineBlock';
import { RoundBlock } from './RoundBlock';
import { SharpBlock } from './SharpBlock';
import { TwoToneBlock } from './TwoToneBlock';
export var Block =
/*#__PURE__*/
function Block(props) {
  return createThemedIcon(props, FilledBlock, OutlineBlock, RoundBlock, SharpBlock, TwoToneBlock);
};