import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGroup } from './FilledGroup';
import { OutlineGroup } from './OutlineGroup';
import { RoundGroup } from './RoundGroup';
import { SharpGroup } from './SharpGroup';
import { TwoToneGroup } from './TwoToneGroup';
export var Group =
/*#__PURE__*/
function Group(props) {
  return createThemedIcon(props, FilledGroup, OutlineGroup, RoundGroup, SharpGroup, TwoToneGroup);
};