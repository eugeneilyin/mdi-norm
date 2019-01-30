import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalFlorist } from './FilledLocalFlorist';
import { OutlineLocalFlorist } from './OutlineLocalFlorist';
import { RoundLocalFlorist } from './RoundLocalFlorist';
import { SharpLocalFlorist } from './SharpLocalFlorist';
import { TwoToneLocalFlorist } from './TwoToneLocalFlorist';
export var LocalFlorist =
/*#__PURE__*/
function LocalFlorist(props) {
  return createThemedIcon(props, FilledLocalFlorist, OutlineLocalFlorist, RoundLocalFlorist, SharpLocalFlorist, TwoToneLocalFlorist);
};