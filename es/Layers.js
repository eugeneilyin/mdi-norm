import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLayers } from './FilledLayers';
import { OutlineLayers } from './OutlineLayers';
import { RoundLayers } from './RoundLayers';
import { SharpLayers } from './SharpLayers';
import { TwoToneLayers } from './TwoToneLayers';
export var Layers =
/*#__PURE__*/
function Layers(props) {
  return createThemedIcon(props, FilledLayers, OutlineLayers, RoundLayers, SharpLayers, TwoToneLayers);
};