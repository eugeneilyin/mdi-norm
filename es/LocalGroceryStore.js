import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalGroceryStore } from './FilledLocalGroceryStore';
import { OutlineLocalGroceryStore } from './OutlineLocalGroceryStore';
import { RoundLocalGroceryStore } from './RoundLocalGroceryStore';
import { SharpLocalGroceryStore } from './SharpLocalGroceryStore';
import { TwoToneLocalGroceryStore } from './TwoToneLocalGroceryStore';
export var LocalGroceryStore =
/*#__PURE__*/
function LocalGroceryStore(props) {
  return createThemedIcon(props, FilledLocalGroceryStore, OutlineLocalGroceryStore, RoundLocalGroceryStore, SharpLocalGroceryStore, TwoToneLocalGroceryStore);
};