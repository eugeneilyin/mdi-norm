import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFilterVintage } from './FilledFilterVintage';
import { OutlineFilterVintage } from './OutlineFilterVintage';
import { RoundFilterVintage } from './RoundFilterVintage';
import { SharpFilterVintage } from './SharpFilterVintage';
import { TwoToneFilterVintage } from './TwoToneFilterVintage';
export var FilterVintage =
/*#__PURE__*/
function FilterVintage(props) {
  return createThemedIcon(props, FilledFilterVintage, OutlineFilterVintage, RoundFilterVintage, SharpFilterVintage, TwoToneFilterVintage);
};