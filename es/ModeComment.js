import { createThemedIcon } from './utils/createThemedIcon';
import { FilledModeComment } from './FilledModeComment';
import { OutlineModeComment } from './OutlineModeComment';
import { RoundModeComment } from './RoundModeComment';
import { SharpModeComment } from './SharpModeComment';
import { TwoToneModeComment } from './TwoToneModeComment';
export var ModeComment =
/*#__PURE__*/
function ModeComment(props) {
  return createThemedIcon(props, FilledModeComment, OutlineModeComment, RoundModeComment, SharpModeComment, TwoToneModeComment);
};