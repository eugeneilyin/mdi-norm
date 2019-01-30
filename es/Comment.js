import { createThemedIcon } from './utils/createThemedIcon';
import { FilledComment } from './FilledComment';
import { OutlineComment } from './OutlineComment';
import { RoundComment } from './RoundComment';
import { SharpComment } from './SharpComment';
import { TwoToneComment } from './TwoToneComment';
export var Comment =
/*#__PURE__*/
function Comment(props) {
  return createThemedIcon(props, FilledComment, OutlineComment, RoundComment, SharpComment, TwoToneComment);
};