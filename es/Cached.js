import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCached } from './FilledCached';
import { OutlineCached } from './OutlineCached';
import { RoundCached } from './RoundCached';
import { SharpCached } from './SharpCached';
import { TwoToneCached } from './TwoToneCached';
export var Cached =
/*#__PURE__*/
function Cached(props) {
  return createThemedIcon(props, FilledCached, OutlineCached, RoundCached, SharpCached, TwoToneCached);
};