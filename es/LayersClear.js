import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLayersClear } from './FilledLayersClear';
import { OutlineLayersClear } from './OutlineLayersClear';
import { RoundLayersClear } from './RoundLayersClear';
import { SharpLayersClear } from './SharpLayersClear';
import { TwoToneLayersClear } from './TwoToneLayersClear';
export var LayersClear =
/*#__PURE__*/
function LayersClear(props) {
  return createThemedIcon(props, FilledLayersClear, OutlineLayersClear, RoundLayersClear, SharpLayersClear, TwoToneLayersClear);
};