import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMarkunread } from './FilledMarkunread';
import { OutlineMarkunread } from './OutlineMarkunread';
import { RoundMarkunread } from './RoundMarkunread';
import { SharpMarkunread } from './SharpMarkunread';
import { TwoToneMarkunread } from './TwoToneMarkunread';
export var Markunread =
/*#__PURE__*/
function Markunread(props) {
  return createThemedIcon(props, FilledMarkunread, OutlineMarkunread, RoundMarkunread, SharpMarkunread, TwoToneMarkunread);
};