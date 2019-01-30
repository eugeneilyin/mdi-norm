import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSpa } from './FilledSpa';
import { OutlineSpa } from './OutlineSpa';
import { RoundSpa } from './RoundSpa';
import { SharpSpa } from './SharpSpa';
import { TwoToneSpa } from './TwoToneSpa';
export var Spa =
/*#__PURE__*/
function Spa(props) {
  return createThemedIcon(props, FilledSpa, OutlineSpa, RoundSpa, SharpSpa, TwoToneSpa);
};