import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCopyright } from './FilledCopyright';
import { OutlineCopyright } from './OutlineCopyright';
import { RoundCopyright } from './RoundCopyright';
import { SharpCopyright } from './SharpCopyright';
import { TwoToneCopyright } from './TwoToneCopyright';
export var Copyright =
/*#__PURE__*/
function Copyright(props) {
  return createThemedIcon(props, FilledCopyright, OutlineCopyright, RoundCopyright, SharpCopyright, TwoToneCopyright);
};