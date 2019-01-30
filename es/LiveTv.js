import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLiveTv } from './FilledLiveTv';
import { OutlineLiveTv } from './OutlineLiveTv';
import { RoundLiveTv } from './RoundLiveTv';
import { SharpLiveTv } from './SharpLiveTv';
import { TwoToneLiveTv } from './TwoToneLiveTv';
export var LiveTv =
/*#__PURE__*/
function LiveTv(props) {
  return createThemedIcon(props, FilledLiveTv, OutlineLiveTv, RoundLiveTv, SharpLiveTv, TwoToneLiveTv);
};