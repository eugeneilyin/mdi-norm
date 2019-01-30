import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFlare } from './FilledFlare';
import { OutlineFlare } from './OutlineFlare';
import { RoundFlare } from './RoundFlare';
import { SharpFlare } from './SharpFlare';
import { TwoToneFlare } from './TwoToneFlare';
export var Flare =
/*#__PURE__*/
function Flare(props) {
  return createThemedIcon(props, FilledFlare, OutlineFlare, RoundFlare, SharpFlare, TwoToneFlare);
};