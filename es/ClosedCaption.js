import { createThemedIcon } from './utils/createThemedIcon';
import { FilledClosedCaption } from './FilledClosedCaption';
import { OutlineClosedCaption } from './OutlineClosedCaption';
import { RoundClosedCaption } from './RoundClosedCaption';
import { SharpClosedCaption } from './SharpClosedCaption';
import { TwoToneClosedCaption } from './TwoToneClosedCaption';
export var ClosedCaption =
/*#__PURE__*/
function ClosedCaption(props) {
  return createThemedIcon(props, FilledClosedCaption, OutlineClosedCaption, RoundClosedCaption, SharpClosedCaption, TwoToneClosedCaption);
};