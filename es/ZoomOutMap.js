import { createThemedIcon } from './utils/createThemedIcon';
import { FilledZoomOutMap } from './FilledZoomOutMap';
import { OutlineZoomOutMap } from './OutlineZoomOutMap';
import { RoundZoomOutMap } from './RoundZoomOutMap';
import { SharpZoomOutMap } from './SharpZoomOutMap';
import { TwoToneZoomOutMap } from './TwoToneZoomOutMap';
export var ZoomOutMap =
/*#__PURE__*/
function ZoomOutMap(props) {
  return createThemedIcon(props, FilledZoomOutMap, OutlineZoomOutMap, RoundZoomOutMap, SharpZoomOutMap, TwoToneZoomOutMap);
};