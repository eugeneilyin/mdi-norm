import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFilterHdr } from './FilledFilterHdr';
import { OutlineFilterHdr } from './OutlineFilterHdr';
import { RoundFilterHdr } from './RoundFilterHdr';
import { SharpFilterHdr } from './SharpFilterHdr';
import { TwoToneFilterHdr } from './TwoToneFilterHdr';
export var FilterHdr =
/*#__PURE__*/
function FilterHdr(props) {
  return createThemedIcon(props, FilledFilterHdr, OutlineFilterHdr, RoundFilterHdr, SharpFilterHdr, TwoToneFilterHdr);
};