import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNaturePeople } from './FilledNaturePeople';
import { OutlineNaturePeople } from './OutlineNaturePeople';
import { RoundNaturePeople } from './RoundNaturePeople';
import { SharpNaturePeople } from './SharpNaturePeople';
import { TwoToneNaturePeople } from './TwoToneNaturePeople';
export var NaturePeople =
/*#__PURE__*/
function NaturePeople(props) {
  return createThemedIcon(props, FilledNaturePeople, OutlineNaturePeople, RoundNaturePeople, SharpNaturePeople, TwoToneNaturePeople);
};