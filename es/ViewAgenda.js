import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewAgenda } from './FilledViewAgenda';
import { OutlineViewAgenda } from './OutlineViewAgenda';
import { RoundViewAgenda } from './RoundViewAgenda';
import { SharpViewAgenda } from './SharpViewAgenda';
import { TwoToneViewAgenda } from './TwoToneViewAgenda';
export var ViewAgenda =
/*#__PURE__*/
function ViewAgenda(props) {
  return createThemedIcon(props, FilledViewAgenda, OutlineViewAgenda, RoundViewAgenda, SharpViewAgenda, TwoToneViewAgenda);
};