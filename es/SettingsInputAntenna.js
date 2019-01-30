import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSettingsInputAntenna } from './FilledSettingsInputAntenna';
import { OutlineSettingsInputAntenna } from './OutlineSettingsInputAntenna';
import { RoundSettingsInputAntenna } from './RoundSettingsInputAntenna';
import { SharpSettingsInputAntenna } from './SharpSettingsInputAntenna';
import { TwoToneSettingsInputAntenna } from './TwoToneSettingsInputAntenna';
export var SettingsInputAntenna =
/*#__PURE__*/
function SettingsInputAntenna(props) {
  return createThemedIcon(props, FilledSettingsInputAntenna, OutlineSettingsInputAntenna, RoundSettingsInputAntenna, SharpSettingsInputAntenna, TwoToneSettingsInputAntenna);
};