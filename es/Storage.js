import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStorage } from './FilledStorage';
import { OutlineStorage } from './OutlineStorage';
import { RoundStorage } from './RoundStorage';
import { SharpStorage } from './SharpStorage';
import { TwoToneStorage } from './TwoToneStorage';
export var Storage =
/*#__PURE__*/
function Storage(props) {
  return createThemedIcon(props, FilledStorage, OutlineStorage, RoundStorage, SharpStorage, TwoToneStorage);
};