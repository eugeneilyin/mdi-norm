import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTv } from './FilledTv';
import { OutlineTv } from './OutlineTv';
import { RoundTv } from './RoundTv';
import { SharpTv } from './SharpTv';
import { TwoToneTv } from './TwoToneTv';
export var Tv =
/*#__PURE__*/
function Tv(props) {
  return createThemedIcon(props, FilledTv, OutlineTv, RoundTv, SharpTv, TwoToneTv);
};