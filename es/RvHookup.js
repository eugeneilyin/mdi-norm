import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRvHookup } from './FilledRvHookup';
import { OutlineRvHookup } from './OutlineRvHookup';
import { RoundRvHookup } from './RoundRvHookup';
import { SharpRvHookup } from './SharpRvHookup';
import { TwoToneRvHookup } from './TwoToneRvHookup';
export var RvHookup =
/*#__PURE__*/
function RvHookup(props) {
  return createThemedIcon(props, FilledRvHookup, OutlineRvHookup, RoundRvHookup, SharpRvHookup, TwoToneRvHookup);
};