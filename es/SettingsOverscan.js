import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSettingsOverscan } from './FilledSettingsOverscan';
import { OutlineSettingsOverscan } from './OutlineSettingsOverscan';
import { RoundSettingsOverscan } from './RoundSettingsOverscan';
import { SharpSettingsOverscan } from './SharpSettingsOverscan';
import { TwoToneSettingsOverscan } from './TwoToneSettingsOverscan';
export var SettingsOverscan =
/*#__PURE__*/
function SettingsOverscan(props) {
  return createThemedIcon(props, FilledSettingsOverscan, OutlineSettingsOverscan, RoundSettingsOverscan, SharpSettingsOverscan, TwoToneSettingsOverscan);
};