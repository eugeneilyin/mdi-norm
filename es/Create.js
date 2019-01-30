import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCreate } from './FilledCreate';
import { OutlineCreate } from './OutlineCreate';
import { RoundCreate } from './RoundCreate';
import { SharpCreate } from './SharpCreate';
import { TwoToneCreate } from './TwoToneCreate';
export var Create =
/*#__PURE__*/
function Create(props) {
  return createThemedIcon(props, FilledCreate, OutlineCreate, RoundCreate, SharpCreate, TwoToneCreate);
};