import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFilter } from './FilledFilter';
import { OutlineFilter } from './OutlineFilter';
import { RoundFilter } from './RoundFilter';
import { SharpFilter } from './SharpFilter';
import { TwoToneFilter } from './TwoToneFilter';
export var Filter =
/*#__PURE__*/
function Filter(props) {
  return createThemedIcon(props, FilledFilter, OutlineFilter, RoundFilter, SharpFilter, TwoToneFilter);
};