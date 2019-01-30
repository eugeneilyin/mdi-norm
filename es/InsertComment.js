import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInsertComment } from './FilledInsertComment';
import { OutlineInsertComment } from './OutlineInsertComment';
import { RoundInsertComment } from './RoundInsertComment';
import { SharpInsertComment } from './SharpInsertComment';
import { TwoToneInsertComment } from './TwoToneInsertComment';
export var InsertComment =
/*#__PURE__*/
function InsertComment(props) {
  return createThemedIcon(props, FilledInsertComment, OutlineInsertComment, RoundInsertComment, SharpInsertComment, TwoToneInsertComment);
};