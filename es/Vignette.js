import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVignette } from './FilledVignette';
import { OutlineVignette } from './OutlineVignette';
import { RoundVignette } from './RoundVignette';
import { SharpVignette } from './SharpVignette';
import { TwoToneVignette } from './TwoToneVignette';
export var Vignette =
/*#__PURE__*/
function Vignette(props) {
  return createThemedIcon(props, FilledVignette, OutlineVignette, RoundVignette, SharpVignette, TwoToneVignette);
};