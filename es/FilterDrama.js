import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFilterDrama } from './FilledFilterDrama';
import { OutlineFilterDrama } from './OutlineFilterDrama';
import { RoundFilterDrama } from './RoundFilterDrama';
import { SharpFilterDrama } from './SharpFilterDrama';
import { TwoToneFilterDrama } from './TwoToneFilterDrama';
export var FilterDrama =
/*#__PURE__*/
function FilterDrama(props) {
  return createThemedIcon(props, FilledFilterDrama, OutlineFilterDrama, RoundFilterDrama, SharpFilterDrama, TwoToneFilterDrama);
};