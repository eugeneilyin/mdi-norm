import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSettingsInputComponent } from './FilledSettingsInputComponent';
import { OutlineSettingsInputComponent } from './OutlineSettingsInputComponent';
import { RoundSettingsInputComponent } from './RoundSettingsInputComponent';
import { SharpSettingsInputComponent } from './SharpSettingsInputComponent';
import { TwoToneSettingsInputComponent } from './TwoToneSettingsInputComponent';
export var SettingsInputComponent =
/*#__PURE__*/
function SettingsInputComponent(props) {
  return createThemedIcon(props, FilledSettingsInputComponent, OutlineSettingsInputComponent, RoundSettingsInputComponent, SharpSettingsInputComponent, TwoToneSettingsInputComponent);
};