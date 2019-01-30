import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPlace } from './FilledPlace';
import { OutlinePlace } from './OutlinePlace';
import { RoundPlace } from './RoundPlace';
import { SharpPlace } from './SharpPlace';
import { TwoTonePlace } from './TwoTonePlace';
export var Place =
/*#__PURE__*/
function Place(props) {
  return createThemedIcon(props, FilledPlace, OutlinePlace, RoundPlace, SharpPlace, TwoTonePlace);
};