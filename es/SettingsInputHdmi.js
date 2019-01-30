import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSettingsInputHdmi } from './FilledSettingsInputHdmi';
import { OutlineSettingsInputHdmi } from './OutlineSettingsInputHdmi';
import { RoundSettingsInputHdmi } from './RoundSettingsInputHdmi';
import { SharpSettingsInputHdmi } from './SharpSettingsInputHdmi';
import { TwoToneSettingsInputHdmi } from './TwoToneSettingsInputHdmi';
export var SettingsInputHdmi =
/*#__PURE__*/
function SettingsInputHdmi(props) {
  return createThemedIcon(props, FilledSettingsInputHdmi, OutlineSettingsInputHdmi, RoundSettingsInputHdmi, SharpSettingsInputHdmi, TwoToneSettingsInputHdmi);
};