import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCancelPresentation } from './FilledCancelPresentation';
import { OutlineCancelPresentation } from './OutlineCancelPresentation';
import { RoundCancelPresentation } from './RoundCancelPresentation';
import { SharpCancelPresentation } from './SharpCancelPresentation';
import { TwoToneCancelPresentation } from './TwoToneCancelPresentation';
export var CancelPresentation =
/*#__PURE__*/
function CancelPresentation(props) {
  return createThemedIcon(props, FilledCancelPresentation, OutlineCancelPresentation, RoundCancelPresentation, SharpCancelPresentation, TwoToneCancelPresentation);
};