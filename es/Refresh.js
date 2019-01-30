import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRefresh } from './FilledRefresh';
import { OutlineRefresh } from './OutlineRefresh';
import { RoundRefresh } from './RoundRefresh';
import { SharpRefresh } from './SharpRefresh';
import { TwoToneRefresh } from './TwoToneRefresh';
export var Refresh =
/*#__PURE__*/
function Refresh(props) {
  return createThemedIcon(props, FilledRefresh, OutlineRefresh, RoundRefresh, SharpRefresh, TwoToneRefresh);
};