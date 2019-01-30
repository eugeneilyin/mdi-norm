import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLandscape } from './FilledLandscape';
import { OutlineLandscape } from './OutlineLandscape';
import { RoundLandscape } from './RoundLandscape';
import { SharpLandscape } from './SharpLandscape';
import { TwoToneLandscape } from './TwoToneLandscape';
export var Landscape =
/*#__PURE__*/
function Landscape(props) {
  return createThemedIcon(props, FilledLandscape, OutlineLandscape, RoundLandscape, SharpLandscape, TwoToneLandscape);
};