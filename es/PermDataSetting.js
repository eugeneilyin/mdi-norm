import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPermDataSetting } from './FilledPermDataSetting';
import { OutlinePermDataSetting } from './OutlinePermDataSetting';
import { RoundPermDataSetting } from './RoundPermDataSetting';
import { SharpPermDataSetting } from './SharpPermDataSetting';
import { TwoTonePermDataSetting } from './TwoTonePermDataSetting';
export var PermDataSetting =
/*#__PURE__*/
function PermDataSetting(props) {
  return createThemedIcon(props, FilledPermDataSetting, OutlinePermDataSetting, RoundPermDataSetting, SharpPermDataSetting, TwoTonePermDataSetting);
};