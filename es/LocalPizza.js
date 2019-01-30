import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalPizza } from './FilledLocalPizza';
import { OutlineLocalPizza } from './OutlineLocalPizza';
import { RoundLocalPizza } from './RoundLocalPizza';
import { SharpLocalPizza } from './SharpLocalPizza';
import { TwoToneLocalPizza } from './TwoToneLocalPizza';
export var LocalPizza =
/*#__PURE__*/
function LocalPizza(props) {
  return createThemedIcon(props, FilledLocalPizza, OutlineLocalPizza, RoundLocalPizza, SharpLocalPizza, TwoToneLocalPizza);
};