import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFlipToBack } from './FilledFlipToBack';
import { OutlineFlipToBack } from './OutlineFlipToBack';
import { RoundFlipToBack } from './RoundFlipToBack';
import { SharpFlipToBack } from './SharpFlipToBack';
import { TwoToneFlipToBack } from './TwoToneFlipToBack';
export var FlipToBack =
/*#__PURE__*/
function FlipToBack(props) {
  return createThemedIcon(props, FilledFlipToBack, OutlineFlipToBack, RoundFlipToBack, SharpFlipToBack, TwoToneFlipToBack);
};