import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTimeline } from './FilledTimeline';
import { OutlineTimeline } from './OutlineTimeline';
import { RoundTimeline } from './RoundTimeline';
import { SharpTimeline } from './SharpTimeline';
import { TwoToneTimeline } from './TwoToneTimeline';
export var Timeline =
/*#__PURE__*/
function Timeline(props) {
  return createThemedIcon(props, FilledTimeline, OutlineTimeline, RoundTimeline, SharpTimeline, TwoToneTimeline);
};