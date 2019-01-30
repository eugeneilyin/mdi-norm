import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTrackChanges } from './FilledTrackChanges';
import { OutlineTrackChanges } from './OutlineTrackChanges';
import { RoundTrackChanges } from './RoundTrackChanges';
import { SharpTrackChanges } from './SharpTrackChanges';
import { TwoToneTrackChanges } from './TwoToneTrackChanges';
export var TrackChanges =
/*#__PURE__*/
function TrackChanges(props) {
  return createThemedIcon(props, FilledTrackChanges, OutlineTrackChanges, RoundTrackChanges, SharpTrackChanges, TwoToneTrackChanges);
};