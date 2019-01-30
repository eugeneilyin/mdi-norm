import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRouter } from './FilledRouter';
import { OutlineRouter } from './OutlineRouter';
import { RoundRouter } from './RoundRouter';
import { SharpRouter } from './SharpRouter';
import { TwoToneRouter } from './TwoToneRouter';
export var Router =
/*#__PURE__*/
function Router(props) {
  return createThemedIcon(props, FilledRouter, OutlineRouter, RoundRouter, SharpRouter, TwoToneRouter);
};