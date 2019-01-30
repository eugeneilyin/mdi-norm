import { createThemedIcon } from './utils/createThemedIcon';
import { FilledZoomOut } from './FilledZoomOut';
import { OutlineZoomOut } from './OutlineZoomOut';
import { RoundZoomOut } from './RoundZoomOut';
import { SharpZoomOut } from './SharpZoomOut';
import { TwoToneZoomOut } from './TwoToneZoomOut';
export var ZoomOut =
/*#__PURE__*/
function ZoomOut(props) {
  return createThemedIcon(props, FilledZoomOut, OutlineZoomOut, RoundZoomOut, SharpZoomOut, TwoToneZoomOut);
};