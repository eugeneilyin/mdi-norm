import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHighlight } from './FilledHighlight';
import { OutlineHighlight } from './OutlineHighlight';
import { RoundHighlight } from './RoundHighlight';
import { SharpHighlight } from './SharpHighlight';
import { TwoToneHighlight } from './TwoToneHighlight';
export var Highlight =
/*#__PURE__*/
function Highlight(props) {
  return createThemedIcon(props, FilledHighlight, OutlineHighlight, RoundHighlight, SharpHighlight, TwoToneHighlight);
};