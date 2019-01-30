import { createThemedIcon } from './utils/createThemedIcon';
import { FilledZoomIn } from './FilledZoomIn';
import { OutlineZoomIn } from './OutlineZoomIn';
import { RoundZoomIn } from './RoundZoomIn';
import { SharpZoomIn } from './SharpZoomIn';
import { TwoToneZoomIn } from './TwoToneZoomIn';
export var ZoomIn =
/*#__PURE__*/
function ZoomIn(props) {
  return createThemedIcon(props, FilledZoomIn, OutlineZoomIn, RoundZoomIn, SharpZoomIn, TwoToneZoomIn);
};