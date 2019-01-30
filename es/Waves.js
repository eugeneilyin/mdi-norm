import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWaves } from './FilledWaves';
import { OutlineWaves } from './OutlineWaves';
import { RoundWaves } from './RoundWaves';
import { SharpWaves } from './SharpWaves';
import { TwoToneWaves } from './TwoToneWaves';
export var Waves =
/*#__PURE__*/
function Waves(props) {
  return createThemedIcon(props, FilledWaves, OutlineWaves, RoundWaves, SharpWaves, TwoToneWaves);
};