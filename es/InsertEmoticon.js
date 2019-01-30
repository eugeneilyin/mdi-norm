import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInsertEmoticon } from './FilledInsertEmoticon';
import { OutlineInsertEmoticon } from './OutlineInsertEmoticon';
import { RoundInsertEmoticon } from './RoundInsertEmoticon';
import { SharpInsertEmoticon } from './SharpInsertEmoticon';
import { TwoToneInsertEmoticon } from './TwoToneInsertEmoticon';
export var InsertEmoticon =
/*#__PURE__*/
function InsertEmoticon(props) {
  return createThemedIcon(props, FilledInsertEmoticon, OutlineInsertEmoticon, RoundInsertEmoticon, SharpInsertEmoticon, TwoToneInsertEmoticon);
};