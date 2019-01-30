import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTabletMac } from './FilledTabletMac';
import { OutlineTabletMac } from './OutlineTabletMac';
import { RoundTabletMac } from './RoundTabletMac';
import { SharpTabletMac } from './SharpTabletMac';
import { TwoToneTabletMac } from './TwoToneTabletMac';
export var TabletMac =
/*#__PURE__*/
function TabletMac(props) {
  return createThemedIcon(props, FilledTabletMac, OutlineTabletMac, RoundTabletMac, SharpTabletMac, TwoToneTabletMac);
};