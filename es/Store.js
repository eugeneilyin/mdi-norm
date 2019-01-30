import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStore } from './FilledStore';
import { OutlineStore } from './OutlineStore';
import { RoundStore } from './RoundStore';
import { SharpStore } from './SharpStore';
import { TwoToneStore } from './TwoToneStore';
export var Store =
/*#__PURE__*/
function Store(props) {
  return createThemedIcon(props, FilledStore, OutlineStore, RoundStore, SharpStore, TwoToneStore);
};