import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGrain } from './FilledGrain';
import { OutlineGrain } from './OutlineGrain';
import { RoundGrain } from './RoundGrain';
import { SharpGrain } from './SharpGrain';
import { TwoToneGrain } from './TwoToneGrain';
export var Grain =
/*#__PURE__*/
function Grain(props) {
  return createThemedIcon(props, FilledGrain, OutlineGrain, RoundGrain, SharpGrain, TwoToneGrain);
};