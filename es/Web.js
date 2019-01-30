import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWeb } from './FilledWeb';
import { OutlineWeb } from './OutlineWeb';
import { RoundWeb } from './RoundWeb';
import { SharpWeb } from './SharpWeb';
import { TwoToneWeb } from './TwoToneWeb';
export var Web =
/*#__PURE__*/
function Web(props) {
  return createThemedIcon(props, FilledWeb, OutlineWeb, RoundWeb, SharpWeb, TwoToneWeb);
};