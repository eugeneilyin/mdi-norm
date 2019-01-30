import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGraphicEq } from './FilledGraphicEq';
import { OutlineGraphicEq } from './OutlineGraphicEq';
import { RoundGraphicEq } from './RoundGraphicEq';
import { SharpGraphicEq } from './SharpGraphicEq';
import { TwoToneGraphicEq } from './TwoToneGraphicEq';
export var GraphicEq =
/*#__PURE__*/
function GraphicEq(props) {
  return createThemedIcon(props, FilledGraphicEq, OutlineGraphicEq, RoundGraphicEq, SharpGraphicEq, TwoToneGraphicEq);
};