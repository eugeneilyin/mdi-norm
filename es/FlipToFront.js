import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFlipToFront } from './FilledFlipToFront';
import { OutlineFlipToFront } from './OutlineFlipToFront';
import { RoundFlipToFront } from './RoundFlipToFront';
import { SharpFlipToFront } from './SharpFlipToFront';
import { TwoToneFlipToFront } from './TwoToneFlipToFront';
export var FlipToFront =
/*#__PURE__*/
function FlipToFront(props) {
  return createThemedIcon(props, FilledFlipToFront, OutlineFlipToFront, RoundFlipToFront, SharpFlipToFront, TwoToneFlipToFront);
};