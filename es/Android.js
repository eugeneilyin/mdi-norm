import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAndroid } from './FilledAndroid';
import { OutlineAndroid } from './OutlineAndroid';
import { RoundAndroid } from './RoundAndroid';
import { SharpAndroid } from './SharpAndroid';
import { TwoToneAndroid } from './TwoToneAndroid';
export var Android =
/*#__PURE__*/
function Android(props) {
  return createThemedIcon(props, FilledAndroid, OutlineAndroid, RoundAndroid, SharpAndroid, TwoToneAndroid);
};