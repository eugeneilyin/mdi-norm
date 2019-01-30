import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHighQuality } from './FilledHighQuality';
import { OutlineHighQuality } from './OutlineHighQuality';
import { RoundHighQuality } from './RoundHighQuality';
import { SharpHighQuality } from './SharpHighQuality';
import { TwoToneHighQuality } from './TwoToneHighQuality';
export var HighQuality =
/*#__PURE__*/
function HighQuality(props) {
  return createThemedIcon(props, FilledHighQuality, OutlineHighQuality, RoundHighQuality, SharpHighQuality, TwoToneHighQuality);
};