import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSettingsRemote } from './FilledSettingsRemote';
import { OutlineSettingsRemote } from './OutlineSettingsRemote';
import { RoundSettingsRemote } from './RoundSettingsRemote';
import { SharpSettingsRemote } from './SharpSettingsRemote';
import { TwoToneSettingsRemote } from './TwoToneSettingsRemote';
export var SettingsRemote =
/*#__PURE__*/
function SettingsRemote(props) {
  return createThemedIcon(props, FilledSettingsRemote, OutlineSettingsRemote, RoundSettingsRemote, SharpSettingsRemote, TwoToneSettingsRemote);
};