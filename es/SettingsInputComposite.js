import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSettingsInputComposite } from './FilledSettingsInputComposite';
import { OutlineSettingsInputComposite } from './OutlineSettingsInputComposite';
import { RoundSettingsInputComposite } from './RoundSettingsInputComposite';
import { SharpSettingsInputComposite } from './SharpSettingsInputComposite';
import { TwoToneSettingsInputComposite } from './TwoToneSettingsInputComposite';
export var SettingsInputComposite =
/*#__PURE__*/
function SettingsInputComposite(props) {
  return createThemedIcon(props, FilledSettingsInputComposite, OutlineSettingsInputComposite, RoundSettingsInputComposite, SharpSettingsInputComposite, TwoToneSettingsInputComposite);
};