import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEqualizer } from './FilledEqualizer';
import { OutlineEqualizer } from './OutlineEqualizer';
import { RoundEqualizer } from './RoundEqualizer';
import { SharpEqualizer } from './SharpEqualizer';
import { TwoToneEqualizer } from './TwoToneEqualizer';
export var Equalizer =
/*#__PURE__*/
function Equalizer(props) {
  return createThemedIcon(props, FilledEqualizer, OutlineEqualizer, RoundEqualizer, SharpEqualizer, TwoToneEqualizer);
};