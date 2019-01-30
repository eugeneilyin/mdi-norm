import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSettingsPower } from './FilledSettingsPower';
import { OutlineSettingsPower } from './OutlineSettingsPower';
import { RoundSettingsPower } from './RoundSettingsPower';
import { SharpSettingsPower } from './SharpSettingsPower';
import { TwoToneSettingsPower } from './TwoToneSettingsPower';
export var SettingsPower =
/*#__PURE__*/
function SettingsPower(props) {
  return createThemedIcon(props, FilledSettingsPower, OutlineSettingsPower, RoundSettingsPower, SharpSettingsPower, TwoToneSettingsPower);
};