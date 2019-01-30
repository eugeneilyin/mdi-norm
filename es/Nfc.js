import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNfc } from './FilledNfc';
import { OutlineNfc } from './OutlineNfc';
import { RoundNfc } from './RoundNfc';
import { SharpNfc } from './SharpNfc';
import { TwoToneNfc } from './TwoToneNfc';
export var Nfc =
/*#__PURE__*/
function Nfc(props) {
  return createThemedIcon(props, FilledNfc, OutlineNfc, RoundNfc, SharpNfc, TwoToneNfc);
};