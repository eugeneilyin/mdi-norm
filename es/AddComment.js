import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddComment } from './FilledAddComment';
import { OutlineAddComment } from './OutlineAddComment';
import { RoundAddComment } from './RoundAddComment';
import { SharpAddComment } from './SharpAddComment';
import { TwoToneAddComment } from './TwoToneAddComment';
export var AddComment =
/*#__PURE__*/
function AddComment(props) {
  return createThemedIcon(props, FilledAddComment, OutlineAddComment, RoundAddComment, SharpAddComment, TwoToneAddComment);
};