import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFitnessCenter } from './FilledFitnessCenter';
import { OutlineFitnessCenter } from './OutlineFitnessCenter';
import { RoundFitnessCenter } from './RoundFitnessCenter';
import { SharpFitnessCenter } from './SharpFitnessCenter';
import { TwoToneFitnessCenter } from './TwoToneFitnessCenter';
export var FitnessCenter =
/*#__PURE__*/
function FitnessCenter(props) {
  return createThemedIcon(props, FilledFitnessCenter, OutlineFitnessCenter, RoundFitnessCenter, SharpFitnessCenter, TwoToneFitnessCenter);
};