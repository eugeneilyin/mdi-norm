import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSettingsApplications } from './FilledSettingsApplications';
import { OutlineSettingsApplications } from './OutlineSettingsApplications';
import { RoundSettingsApplications } from './RoundSettingsApplications';
import { SharpSettingsApplications } from './SharpSettingsApplications';
import { TwoToneSettingsApplications } from './TwoToneSettingsApplications';
export var SettingsApplications =
/*#__PURE__*/
function SettingsApplications(props) {
  return createThemedIcon(props, FilledSettingsApplications, OutlineSettingsApplications, RoundSettingsApplications, SharpSettingsApplications, TwoToneSettingsApplications);
};