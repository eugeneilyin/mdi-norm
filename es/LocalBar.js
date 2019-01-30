import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalBar } from './FilledLocalBar';
import { OutlineLocalBar } from './OutlineLocalBar';
import { RoundLocalBar } from './RoundLocalBar';
import { SharpLocalBar } from './SharpLocalBar';
import { TwoToneLocalBar } from './TwoToneLocalBar';
export var LocalBar =
/*#__PURE__*/
function LocalBar(props) {
  return createThemedIcon(props, FilledLocalBar, OutlineLocalBar, RoundLocalBar, SharpLocalBar, TwoToneLocalBar);
};