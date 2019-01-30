import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewStream } from './FilledViewStream';
import { OutlineViewStream } from './OutlineViewStream';
import { RoundViewStream } from './RoundViewStream';
import { SharpViewStream } from './SharpViewStream';
import { TwoToneViewStream } from './TwoToneViewStream';
export var ViewStream =
/*#__PURE__*/
function ViewStream(props) {
  return createThemedIcon(props, FilledViewStream, OutlineViewStream, RoundViewStream, SharpViewStream, TwoToneViewStream);
};