import { createThemedIcon } from './utils/createThemedIcon';
import { FilledOfflinePin } from './FilledOfflinePin';
import { OutlineOfflinePin } from './OutlineOfflinePin';
import { RoundOfflinePin } from './RoundOfflinePin';
import { SharpOfflinePin } from './SharpOfflinePin';
import { TwoToneOfflinePin } from './TwoToneOfflinePin';
export var OfflinePin =
/*#__PURE__*/
function OfflinePin(props) {
  return createThemedIcon(props, FilledOfflinePin, OutlineOfflinePin, RoundOfflinePin, SharpOfflinePin, TwoToneOfflinePin);
};