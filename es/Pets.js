import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPets } from './FilledPets';
import { OutlinePets } from './OutlinePets';
import { RoundPets } from './RoundPets';
import { SharpPets } from './SharpPets';
import { TwoTonePets } from './TwoTonePets';
export var Pets =
/*#__PURE__*/
function Pets(props) {
  return createThemedIcon(props, FilledPets, OutlinePets, RoundPets, SharpPets, TwoTonePets);
};