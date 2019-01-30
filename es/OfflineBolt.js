import { createThemedIcon } from './utils/createThemedIcon';
import { FilledOfflineBolt } from './FilledOfflineBolt';
import { OutlineOfflineBolt } from './OutlineOfflineBolt';
import { RoundOfflineBolt } from './RoundOfflineBolt';
import { SharpOfflineBolt } from './SharpOfflineBolt';
import { TwoToneOfflineBolt } from './TwoToneOfflineBolt';
export var OfflineBolt =
/*#__PURE__*/
function OfflineBolt(props) {
  return createThemedIcon(props, FilledOfflineBolt, OutlineOfflineBolt, RoundOfflineBolt, SharpOfflineBolt, TwoToneOfflineBolt);
};